/**
 * Cloudflare Worker handler: GET /api/stats
 *
 * Returns the total number of CVs roasted.
 * Reads from KV key `stats:total_roasts` (defaults to 0).
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
};

export async function handleStats(request, env) {
  try {
    let totalRoasts = 0;
    if (env.RATE_LIMIT) {
      const raw = await env.RATE_LIMIT.get('stats:total_roasts');
      if (raw !== null) {
        totalRoasts = parseInt(raw, 10) || 0;
      }
    }
    return new Response(
      JSON.stringify({ total_roasts: totalRoasts }),
      { status: 200, headers: CORS_HEADERS }
    );
  } catch (err) {
    console.error('Stats handler error:', err);
    return new Response(
      JSON.stringify({ total_roasts: 0 }),
      { status: 200, headers: CORS_HEADERS }
    );
  }
}

export function handleStatsCors() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
