function getConfig() {
  const token = import.meta.env.VITE_NOTION_TOKEN;
  const databaseId = import.meta.env.VITE_NOTION_DATABASE_ID;
  const proxyUrl = import.meta.env.VITE_NOTION_PROXY_URL;
  const isDev = import.meta.env.DEV;
  const baseUrl = proxyUrl || (isDev ? '/notion-proxy/v1' : 'https://api.notion.com/v1');
  return { token, databaseId, baseUrl };
}

function formatUuid(id) {
  const cleaned = id.replace(/[^0-9a-fA-F]/g, '');
  if (cleaned.length !== 32) return id;
  return `${cleaned.slice(0, 8)}-${cleaned.slice(8, 12)}-${cleaned.slice(12, 16)}-${cleaned.slice(16, 20)}-${cleaned.slice(20)}`;
}

const NOTION_VERSION = '2022-06-28';

async function notionFetch(path, options = {}) {
  const cfg = getConfig();
  const response = await fetch(`${cfg.baseUrl}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${cfg.token}`,
      'Content-Type': 'application/json',
      'Notion-Version': NOTION_VERSION,
      ...options.headers,
    },
  });
  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new Error(body?.message || `Notion API returned ${response.status}`);
  }
  return response.json();
}

export async function createNotionPage(data) {
  const cfg = getConfig();
  if (!cfg.token || cfg.token === 'PLACEHOLDER') throw new Error('Notion token not configured');
  if (!cfg.databaseId || cfg.databaseId === 'PLACEHOLDER') throw new Error('Notion database ID not configured');

  const databaseId = formatUuid(cfg.databaseId);

  const schema = await notionFetch(`/databases/${databaseId}`);
  const dbProps = schema.properties || {};

  if (import.meta.env.DEV) {
    console.log('[Notion] schema:', Object.fromEntries(Object.entries(dbProps).map(([k, v]) => [k, v.type])));
  }

  const selectValues = [data.archetype, data.objective, data.resources, data.timeline];
  const properties = {};
  let si = 0;

  for (const [propName, propDef] of Object.entries(dbProps)) {
    switch (propDef.type) {
      case 'title':
        properties[propName] = { title: [{ text: { content: data.projectName } }] };
        break;
      case 'select':
        if (si < selectValues.length && selectValues[si]) {
          properties[propName] = { select: { name: selectValues[si] } };
          si++;
        }
        break;
      case 'rich_text':
        if (data.contact) {
          properties[propName] = { rich_text: [{ text: { content: data.contact } }] };
        }
        break;
      case 'email':
        if (data.contactType === 'email' && data.contact) {
          properties[propName] = { email: data.contact };
        }
        break;
      case 'phone_number':
        if (data.contactType === 'phone' && data.contact) {
          properties[propName] = { phone_number: data.contact };
        }
        break;
    }
  }

  if (import.meta.env.DEV) {
    console.log('[Notion] sending properties:', Object.keys(properties));
  }

  const nonTitleCount = Object.entries(dbProps).filter(([, v]) => v.type !== 'title').length;
  if (nonTitleCount === 0) {
    throw new Error(
      'Your Notion database has no columns besides "Name". Add Select or Text columns to store archetype, objective, resources, timeline, and contact.',
    );
  }

  return notionFetch('/pages', {
    method: 'POST',
    body: JSON.stringify({ parent: { database_id: databaseId }, properties }),
  });
}
