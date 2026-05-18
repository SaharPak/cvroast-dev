const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
};

function json(body, status) {
  return new Response(JSON.stringify(body), { status, headers: CORS_HEADERS });
}

export async function handleFeedback(request, env) {
  try {
    const raw = await request.text();
    if (raw.length > 20000) {
      return json({ success: false, message: 'Payload too large' }, 413);
    }

    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      return json({ success: false, message: 'Invalid JSON' }, 400);
    }

    if (!data || typeof data !== 'object' || Array.isArray(data)) {
      return json({ success: false, message: 'Invalid data' }, 400);
    }

    const required = ['job_search', 'location', 'role_target'];
    for (const field of required) {
      const v = data[field];
      if (typeof v !== 'string' || v.length === 0 || v.length > 200) {
        return json({ success: false, message: `Missing or invalid: ${field}` }, 400);
      }
    }

    if (!env.RATE_LIMIT) {
      console.error('RATE_LIMIT KV binding is not available');
      return json({ success: false, message: 'Storage unavailable' }, 503);
    }

    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
    const today = new Date().toISOString().slice(0, 10);
    const ipKey = `fb_ip:${ip}:${today}`;

    const ipCountRaw = await env.RATE_LIMIT.get(ipKey);
    const ipCount = parseInt(ipCountRaw, 10) || 0;
    if (ipCount >= 5) {
      return json({ success: false, message: 'Daily limit reached' }, 429);
    }

    const id = Date.now() + '-' + Math.random().toString(36).slice(2, 8);
    const key = `feedback:${id}`;
    const stored = {
      ...data,
      _submitted_at: new Date().toISOString(),
    };

    await env.RATE_LIMIT.put(key, JSON.stringify(stored));
    await env.RATE_LIMIT.put(ipKey, String(ipCount + 1), { expirationTtl: 86400 });

    const countRaw = await env.RATE_LIMIT.get('stats:total_feedback');
    const count = (parseInt(countRaw, 10) || 0) + 1;
    await env.RATE_LIMIT.put('stats:total_feedback', String(count));

    return json({ success: true, id }, 200);
  } catch (err) {
    console.error('Feedback handler error:', err);
    return json({ success: false, message: 'Server error' }, 500);
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
