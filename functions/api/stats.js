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
    let totalTokens = 0;
    let feedbackViews = 0;
    let feedbackSubmissions = 0;
    if (env.RATE_LIMIT) {
      const raw = await env.RATE_LIMIT.get('stats:total_roasts');
      if (raw !== null) {
        totalRoasts = parseInt(raw, 10) || 0;
      }
      const rawTokens = await env.RATE_LIMIT.get('stats:total_tokens');
      if (rawTokens !== null) {
        totalTokens = parseInt(rawTokens, 10) || 0;
      }
      const rawViews = await env.RATE_LIMIT.get('views:feedback');
      if (rawViews !== null) {
        feedbackViews = parseInt(rawViews, 10) || 0;
      }
      const rawFeedback = await env.RATE_LIMIT.get('stats:total_feedback');
      if (rawFeedback !== null) {
        feedbackSubmissions = parseInt(rawFeedback, 10) || 0;
      }
    }
    return new Response(
      JSON.stringify({
        total_roasts: totalRoasts,
        total_tokens: totalTokens,
        feedback_page_views: feedbackViews,
        feedback_submissions: feedbackSubmissions,
      }),
      { status: 200, headers: CORS_HEADERS }
    );
  } catch (err) {
    console.error('Stats handler error:', err);
    return new Response(
      JSON.stringify({ total_roasts: 0, total_tokens: 0 }),
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
