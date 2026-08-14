const HUBSPOT_PORTAL_ID = '51874293';
const HUBSPOT_REGION = 'na1';

/**
 * Submits directly from the browser to HubSpot's public Forms API - the same
 * endpoint their own embed script posts to. No secret credentials involved:
 * portal ID and form GUID aren't sensitive, they're meant to be public.
 */
export async function submitHubspotForm(formId, fields) {
  const endpoint = `https://api-${HUBSPOT_REGION}.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${formId}`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: Object.entries(fields)
        .filter(([, value]) => value !== undefined && value !== '')
        .map(([name, value]) => ({ name, value })),
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    }),
  });

  if (!response.ok) {
    throw new Error('hubspot_submit_failed');
  }

  return response.json();
}

export const HUBSPOT_FORMS = {
  contact: '5f6fee33-57d9-4b14-8107-3761735990d0',
  newsletter: '0d631787-9863-4d65-8973-d7a8599fc47e',
};
