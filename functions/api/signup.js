/**
 * Cloudflare Worker handler: POST /api/signup
 *
 * Collects waitlist emails for premium roasts.
 * Stores in KV: key = `signup:{email}`, value = JSON { email, timestamp, ip }.
 * Duplicate signups return 200 without overwriting.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
};

export async function handleSignup(request, env) {
  try {
    const body = await request.json();
    const email = (body.email || '').trim().toLowerCase();

    if (!email || !EMAIL_RE.test(email)) {
      return new Response(
        JSON.stringify({ error: 'invalid_email', message: 'Please enter a valid email address.' }),
        { status: 400, headers: corsHeaders }
      );
    }

    const kvKey = `signup:${email}`;

    if (env.RATE_LIMIT) {
      const existing = await env.RATE_LIMIT.get(kvKey);
      if (existing) {
        return new Response(
          JSON.stringify({ success: true, message: "You're already on the list!" }),
          { status: 200, headers: corsHeaders }
        );
      }

      const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
      await env.RATE_LIMIT.put(kvKey, JSON.stringify({
        email,
        timestamp: new Date().toISOString(),
        ip,
      }));
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: corsHeaders }
    );
  } catch (err) {
    console.error('Signup error:', err);
    return new Response(
      JSON.stringify({ error: 'internal_error', message: 'Something went wrong. Please try again.' }),
      { status: 500, headers: corsHeaders }
    );
  }
}

export function handleSignupCors() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
