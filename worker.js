/**
 * Cloudflare Worker: cvroast-dev
 *
 * Routes /api/roast (POST/OPTIONS) to the Claude-powered CV scorer.
 * Everything else falls through to static assets (index.html, images, etc.).
 *
 * Required bindings:
 *   - Secret:       ANTHROPIC_API_KEY
 *   - KV namespace: RATE_LIMIT
 */

import { handleRoast, handleFetchJd, handleCors } from './functions/api/roast.js';
import { handleSignup, handleSignupCors } from './functions/api/signup.js';
import { handleStats, handleStatsCors } from './functions/api/stats.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/api/roast') {
      if (request.method === 'OPTIONS') return handleCors();
      if (request.method === 'POST') return handleRoast(request, env);
      return new Response('Method not allowed', { status: 405 });
    }

    if (url.pathname === '/api/fetch-jd') {
      if (request.method === 'OPTIONS') return handleCors();
      if (request.method === 'POST') return handleFetchJd(request);
      return new Response('Method not allowed', { status: 405 });
    }

    if (url.pathname === '/api/signup') {
      if (request.method === 'OPTIONS') return handleSignupCors();
      if (request.method === 'POST') return handleSignup(request, env);
      return new Response('Method not allowed', { status: 405 });
    }

    if (url.pathname === '/api/stats') {
      if (request.method === 'OPTIONS') return handleStatsCors();
      if (request.method === 'GET') return handleStats(request, env);
      return new Response('Method not allowed', { status: 405 });
    }

    return env.ASSETS.fetch(request);
  },
};
