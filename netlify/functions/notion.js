/**
 * Server-side Notion proxy.
 *
 * The integration token lives here, in the function's environment — never in the
 * client bundle. The browser posts a plain payload to /api/notion and this
 * function does the authenticated work, which also sidesteps the fact that
 * api.notion.com sends no CORS headers.
 *
 * Required Netlify environment variables (Site settings -> Environment variables):
 *   NOTION_TOKEN        - the internal integration secret (ntn_...)
 *   NOTION_DATABASE_ID  - the target database id
 *
 * Optional, to map answers onto specific columns by name. When a variable is
 * absent the matching answer is simply skipped, so a partial map is safe.
 *   NOTION_PROP_ARCHETYPE, NOTION_PROP_OBJECTIVE, NOTION_PROP_RESOURCES,
 *   NOTION_PROP_TIMELINE, NOTION_PROP_CONTACT
 */

const NOTION_VERSION = '2022-06-28';
const NOTION_API = 'https://api.notion.com/v1';
const MAX_FIELD = 500;

const JSON_HEADERS = { 'Content-Type': 'application/json' };

function fail(statusCode, message) {
  return { statusCode, headers: JSON_HEADERS, body: JSON.stringify({ error: message }) };
}

function formatUuid(id) {
  const cleaned = String(id).replace(/[^0-9a-fA-F]/g, '');
  if (cleaned.length !== 32) return id;
  return `${cleaned.slice(0, 8)}-${cleaned.slice(8, 12)}-${cleaned.slice(12, 16)}-${cleaned.slice(16, 20)}-${cleaned.slice(20)}`;
}

function clean(value) {
  return typeof value === 'string' ? value.trim().slice(0, MAX_FIELD) : '';
}

async function notionFetch(token, path, options = {}) {
  const response = await fetch(`${NOTION_API}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Notion-Version': NOTION_VERSION,
      ...options.headers,
    },
  });

  const body = await response.json().catch(() => null);
  if (!response.ok) {
    const error = new Error(body?.message || `Notion API returned ${response.status}`);
    error.statusCode = response.status;
    throw error;
  }
  return body;
}

/**
 * Builds the Notion `properties` payload.
 *
 * Named columns (via NOTION_PROP_*) win. Anything left over falls back to
 * filling the database's select columns in declared order — which is why the
 * env var map is strongly preferred: Notion does not guarantee property order.
 */
function buildProperties(dbProps, data) {
  const properties = {};
  const claimed = new Set();

  const titleEntry = Object.entries(dbProps).find(([, def]) => def.type === 'title');
  if (titleEntry) {
    properties[titleEntry[0]] = { title: [{ text: { content: data.projectName } }] };
    claimed.add(titleEntry[0]);
  }

  const named = [
    [process.env.NOTION_PROP_ARCHETYPE, data.archetype],
    [process.env.NOTION_PROP_OBJECTIVE, data.objective],
    [process.env.NOTION_PROP_RESOURCES, data.resources],
    [process.env.NOTION_PROP_TIMELINE, data.timeline],
  ];

  const unmapped = [];
  for (const [propName, value] of named) {
    if (!value) continue;
    const def = propName && dbProps[propName];
    if (def && def.type === 'select') {
      properties[propName] = { select: { name: value } };
      claimed.add(propName);
    } else if (def && def.type === 'rich_text') {
      properties[propName] = { rich_text: [{ text: { content: value } }] };
      claimed.add(propName);
    } else {
      unmapped.push(value);
    }
  }

  if (unmapped.length > 0) {
    const freeSelects = Object.entries(dbProps).filter(
      ([name, def]) => def.type === 'select' && !claimed.has(name),
    );
    unmapped.forEach((value, i) => {
      const slot = freeSelects[i];
      if (!slot) return;
      properties[slot[0]] = { select: { name: value } };
      claimed.add(slot[0]);
    });
  }

  if (data.contact) {
    const contactProp = process.env.NOTION_PROP_CONTACT;
    const def = contactProp && dbProps[contactProp];
    const typed =
      def?.type === 'email'
        ? { email: data.contact }
        : def?.type === 'phone_number'
          ? { phone_number: data.contact }
          : def?.type === 'rich_text'
            ? { rich_text: [{ text: { content: data.contact } }] }
            : null;

    if (typed) {
      properties[contactProp] = typed;
      claimed.add(contactProp);
    } else {
      const wanted = data.contactType === 'phone' ? 'phone_number' : 'email';
      const match =
        Object.entries(dbProps).find(([name, d]) => d.type === wanted && !claimed.has(name)) ||
        Object.entries(dbProps).find(([name, d]) => d.type === 'rich_text' && !claimed.has(name));

      if (match) {
        const [name, d] = match;
        properties[name] =
          d.type === 'rich_text'
            ? { rich_text: [{ text: { content: data.contact } }] }
            : d.type === 'email'
              ? { email: data.contact }
              : { phone_number: data.contact };
        claimed.add(name);
      }
    }
  }

  return properties;
}

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return fail(405, 'Method not allowed.');
  }

  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!token || !databaseId) {
    console.error('[notion] NOTION_TOKEN or NOTION_DATABASE_ID is not configured.');
    return fail(500, 'The submission service is not configured yet. Please reach out by email instead.');
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch {
    return fail(400, 'Malformed request.');
  }

  const data = {
    projectName: clean(payload.projectName),
    archetype: clean(payload.archetype),
    objective: clean(payload.objective),
    resources: clean(payload.resources),
    timeline: clean(payload.timeline),
    contact: clean(payload.contact),
    contactType: payload.contactType === 'phone' ? 'phone' : 'email',
  };

  if (!data.projectName || !data.contact) {
    return fail(400, 'A project name and a contact are required.');
  }

  try {
    const id = formatUuid(databaseId);
    const schema = await notionFetch(token, `/databases/${id}`);
    const properties = buildProperties(schema.properties || {}, data);

    await notionFetch(token, '/pages', {
      method: 'POST',
      body: JSON.stringify({ parent: { database_id: id }, properties }),
    });

    return { statusCode: 200, headers: JSON_HEADERS, body: JSON.stringify({ ok: true }) };
  } catch (error) {
    // Log the real cause server-side; never leak Notion internals to the browser.
    console.error('[notion] submission failed:', error);
    return fail(502, 'Could not record your project right now. Please try again or email me directly.');
  }
}
