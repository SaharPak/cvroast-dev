const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
};

export async function handleFeedback(request, env) {
  try {
    const data = await request.json();

    if (!data || typeof data !== 'object') {
      return new Response(
        JSON.stringify({ success: false, message: 'Invalid data' }),
        { status: 400, headers: CORS_HEADERS }
      );
    }

    const id = Date.now() + '-' + Math.random().toString(36).slice(2, 8);
    const key = `feedback:${id}`;

    if (env.RATE_LIMIT) {
      await env.RATE_LIMIT.put(key, JSON.stringify(data));

      const countRaw = await env.RATE_LIMIT.get('stats:total_feedback');
      const count = (parseInt(countRaw, 10) || 0) + 1;
      await env.RATE_LIMIT.put('stats:total_feedback', String(count));
    }

    return new Response(
      JSON.stringify({ success: true, id }),
      { status: 200, headers: CORS_HEADERS }
    );
  } catch (err) {
    console.error('Feedback handler error:', err);
    return new Response(
      JSON.stringify({ success: false, message: 'Server error' }),
      { status: 500, headers: CORS_HEADERS }
    );
  }
}

export function handleFeedbackCors() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
