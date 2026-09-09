/**
 * Client side of the project-brief submission.
 *
 * Deliberately dumb: it posts the answers to our own origin and lets the server
 * hold the Notion credentials. Nothing secret is reachable from the bundle.
 * See netlify/functions/notion.js for the server half, and the dev middleware in
 * vite.config.mjs that mirrors it locally.
 */

const ENDPOINT = '/api/notion';

const GENERIC_ERROR =
  'Could not send your project right now. Please try again, or email mohamed.ncib@polytechnicien.tn.';

export async function createNotionPage(data) {
  let response;

  try {
    response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch {
    throw new Error('Network error. Check your connection and try again.');
  }

  // A misconfigured host can answer the SPA shell here; treat anything that is
  // not JSON as the service being unavailable rather than as a success.
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    throw new Error(GENERIC_ERROR);
  }

  const body = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(body?.error || GENERIC_ERROR);
  }

  return body;
}
