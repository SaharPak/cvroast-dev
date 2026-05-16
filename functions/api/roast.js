/**
 * Cloudflare Pages Function: POST /api/roast
 *
 * Receives a CV text, calls Claude API with the ai-cv-roast skill rules
 * as the system prompt, returns the scored evaluation as markdown.
 *
 * Rate limit: 1 roast per IP per 24 hours (enforced via Cloudflare KV).
 *
 * Required Cloudflare Pages bindings:
 *   - Environment variable: ANTHROPIC_API_KEY (set in Pages settings)
 *   - KV namespace binding:  RATE_LIMIT (any namespace, just bind it)
 */

const SYSTEM_PROMPT = `You are the AI CV Roast skill — a research-backed CV evaluator for AI Product Manager, AI Engineer, and technical PM roles in 2026. Your job is to roast (constructively) the CV the user pastes.

## Core Truth
In 2026, "I've used AI tools to ship something real" beats "I have an AI certification" by 100x. Every evaluation must prioritize evidence of shipped work over credentials, theory, or buzzwords.

## 2026 Market Context
- 70% of companies now use AI to screen resumes
- 75% of qualified candidates are filtered by ATS before a human review
- 71% of hiring managers prefer junior + AI skills over senior + no AI
- AI-native companies hire 1/3 fewer PMs but at 25-40% comp premium ($192K-$437K total comp for AI PMs)
- "Passionate about AI" without shipped projects = automatic rejection

## Universal Rules — What WORKS
- Single-column layout (ATS scrambles multi-column)
- Quantified impact in every bullet (numbers in scope, speed, adoption, savings, volume)
- Specific tool/model names matching JDs (e.g., "AWS Bedrock" not "cloud AI")
- Cause-and-effect bullets ("Used X → reduced Y by Z%")
- Production scale numbers (users, requests/day, customers, dollars saved)
- Soft skills phrased as actions ("Mentored 3 engineers" not "leadership")
- AI tools the candidate actually uses (Cursor, Claude Code, n8n, LangChain, RAG)
- Public proof-of-work links (GitHub, Medium, X, blog)

## Universal Rules — What FAILS
- Generic AI claims ("passionate about AI") — triggers rejection
- Theoretical knowledge without shipped work
- Buzzword soup ("leveraged synergistic AI")
- Missing infrastructure/deployment keywords (68% of ML resumes rejected for this)
- Multi-column layouts or tables
- Cliché phrases ("results-oriented," "proven track record")
- Listing certifications instead of shipped work

## CV Evaluation Framework
Score each dimension 1-5. Global score is the weighted average:
- Shipped Evidence (30%) — Real, in-production AI/PM work with named tools and outcomes
- Quantified Impact (20%) — Numbers in every bullet (scope, speed, adoption, savings)
- AI Tooling Visibility (15%) — Cursor, Claude Code, n8n, LangChain, RAG, agents — explicitly named
- ATS Compatibility (15%) — Single column, no tables, standard headings, parseable PDF
- Keyword Match (10%) — Without a JD, score against generic AI PM/Engineer keyword set
- Public Proof Surface (10%) — LinkedIn, GitHub, Medium/blog/X visibility

Score interpretation:
- 4.5+ → Strong, recommend applying
- 4.0-4.4 → Good, minor polish before applying
- 3.5-3.9 → Needs targeted rewrites in 2-3 sections
- Below 3.5 → Major restructure needed

## Universal Phrases to Strip Out
"passionate about", "results-oriented", "proven track record", "leveraged", "spearheaded",
"facilitated", "synergies", "robust", "seamless", "cutting-edge", "innovative",
"in today's fast-paced world", "demonstrated ability to", "best practices"

## Hard Rules (Never Break)
1. Never invent metrics — only reference numbers actually present in the candidate's CV.
2. Never use the cliché phrases listed above in any rewrite.
3. Always run the ATS compatibility check.
4. Always favor "shipped" language over "managed" or "responsible for."
5. Never use double dashes (\`--\`) — use commas, parentheses, or periods.
6. Never claim work the candidate didn't do — frame customizations and forks honestly.

## Output Format (REQUIRED — follow exactly)

Output your response in this exact markdown structure:

\`\`\`
## Score: X.X/5

**Verdict:** [Strong / Polish first / Major rewrite / Don't apply yet]

| Dimension | Score | Notes |
|---|---|---|
| Shipped Evidence | X/5 | [one-line specific note] |
| Quantified Impact | X/5 | [one-line specific note] |
| AI Tooling Visibility | X/5 | [one-line specific note] |
| ATS Compatibility | X/5 | [one-line specific note] |
| Keyword Match | X/5 | [one-line specific note] |
| Public Proof Surface | X/5 | [one-line specific note] |

### What Works (Top 3)
1. [Specific strength with example from CV]
2. ...
3. ...

### What Needs Fixing (Ranked by Impact)

| # | Issue | Why it matters | How to fix |
|---|---|---|---|
| 1 | [issue] | [why] | [how] |
| 2 | ... | ... | ... |
| 3 | ... | ... | ... |

### Top 3 Rewrites (Before → After)

**1. [Section/bullet name]**

Before:
> [exact text from CV]

After:
> [rewritten version with quantification + tools + clean language]

**2. [Section/bullet name]**

Before:
> [exact text from CV]

After:
> [rewritten version]

**3. [Section/bullet name]**

Before:
> [exact text from CV]

After:
> [rewritten version]

### Recommendation
[1-2 sentence summary of what to do next]
\`\`\`

Be honest. If the CV is weak, give a low score. Don't inflate to be polite. The user explicitly asked for a roast — they want truth, not flattery. But always include actionable rewrites — never leave them with criticism alone.`;

export async function handleRoast(request, env) {

  // CORS headers for browser fetch
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    // Get the visitor's IP for rate limiting
    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    const rateLimitKey = `roast:${ip}:${today}`;

    const MAX_FREE_ROASTS = 3;
    if (env.RATE_LIMIT) {
      const used = parseInt(await env.RATE_LIMIT.get(rateLimitKey) || '0', 10);
      if (used >= MAX_FREE_ROASTS) {
        return new Response(
          JSON.stringify({
            error: 'rate_limited',
            message: `You've used all ${MAX_FREE_ROASTS} free roasts for today. Try again in 24 hours, or fork the open-source skill on GitHub for unlimited use: https://github.com/SaharPak/ai-cv-roast`,
            remaining: 0,
          }),
          { status: 429, headers: corsHeaders }
        );
      }
    }

    // Parse request body
    const body = await request.json();
    const cvText = (body.cv_text || '').trim();
    const jdText = (body.jd_text || '').trim();

    // Validate
    if (!cvText) {
      return new Response(
        JSON.stringify({ error: 'missing_cv', message: 'Paste your CV text first.' }),
        { status: 400, headers: corsHeaders }
      );
    }

    if (cvText.length < 200) {
      return new Response(
        JSON.stringify({
          error: 'cv_too_short',
          message: "That's not a CV — paste the full thing (at least a couple of paragraphs).",
        }),
        { status: 400, headers: corsHeaders }
      );
    }

    if (cvText.length > 50000) {
      return new Response(
        JSON.stringify({
          error: 'cv_too_long',
          message: "Your CV is too long (>50K characters). Trim it down — recruiters won't read more than 2 pages anyway.",
        }),
        { status: 400, headers: corsHeaders }
      );
    }

    // Build the user message
    const userMessage = jdText
      ? `Here is my CV. Please roast it.\n\n--- CV START ---\n${cvText}\n--- CV END ---\n\n--- TARGET JOB DESCRIPTION ---\n${jdText}\n--- JD END ---\n\nUse the JD to score keyword match precisely.`
      : `Here is my CV. Please roast it.\n\n--- CV START ---\n${cvText}\n--- CV END ---`;

    // Call Claude API
    const claudeResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5-20250929',
        max_tokens: 4000,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: userMessage }],
      }),
    });

    if (!claudeResponse.ok) {
      const errorText = await claudeResponse.text();
      console.error('Claude API error:', claudeResponse.status, errorText);
      return new Response(
        JSON.stringify({
          error: 'api_error',
          message: 'The AI is taking a coffee break. Try again in a minute.',
        }),
        { status: 502, headers: corsHeaders }
      );
    }

    const claudeData = await claudeResponse.json();
    const markdown = claudeData?.content?.[0]?.text || '';
    const usage = claudeData?.usage || {};

    if (!markdown) {
      return new Response(
        JSON.stringify({ error: 'empty_response', message: 'Got an empty response. Try again.' }),
        { status: 502, headers: corsHeaders }
      );
    }

    // Mark this IP as having used today's free roast + increment global counter
    let totalRoasts = 0;
    if (env.RATE_LIMIT) {
      const currentUse = parseInt(await env.RATE_LIMIT.get(rateLimitKey) || '0', 10);
      await env.RATE_LIMIT.put(rateLimitKey, String(currentUse + 1), { expirationTtl: 86400 });

      const raw = await env.RATE_LIMIT.get('stats:total_roasts');
      totalRoasts = (parseInt(raw, 10) || 0) + 1;
      await env.RATE_LIMIT.put('stats:total_roasts', String(totalRoasts));

      const roastTokens = (usage.input_tokens || 0) + (usage.output_tokens || 0);
      const rawTokens = await env.RATE_LIMIT.get('stats:total_tokens');
      const newTotalTokens = (parseInt(rawTokens, 10) || 0) + roastTokens;
      await env.RATE_LIMIT.put('stats:total_tokens', String(newTotalTokens));
    }

    const inputTokens = usage.input_tokens || 0;
    const outputTokens = usage.output_tokens || 0;

    return new Response(
      JSON.stringify({
        markdown,
        used_today: true,
        total_roasts: totalRoasts,
        tokens: {
          input: inputTokens,
          output: outputTokens,
          total: inputTokens + outputTokens,
        },
      }),
      { status: 200, headers: corsHeaders }
    );
  } catch (err) {
    console.error('Roast function error:', err);
    return new Response(
      JSON.stringify({
        error: 'internal_error',
        message: 'Something broke on our side. Try again, or open an issue on GitHub.',
      }),
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function handleFetchJd(request) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    const body = await request.json();
    const url = (body.url || '').trim();

    if (!url || !/^https?:\/\//i.test(url)) {
      return new Response(
        JSON.stringify({ error: 'invalid_url', message: 'Please provide a valid URL.' }),
        { status: 400, headers: corsHeaders }
      );
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; CVRoast/1.0)',
        'Accept': 'text/html,text/plain,application/xhtml+xml',
      },
    });
    clearTimeout(timeout);

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: 'fetch_failed', message: `Could not fetch URL (HTTP ${res.status}).` }),
        { status: 422, headers: corsHeaders }
      );
    }

    const html = await res.text();

    let text = html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '')
      .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '')
      .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/gi, ' ')
      .replace(/&amp;/gi, '&')
      .replace(/&lt;/gi, '<')
      .replace(/&gt;/gi, '>')
      .replace(/&quot;/gi, '"')
      .replace(/&#39;/gi, "'")
      .replace(/\s+/g, ' ')
      .trim();

    if (text.length > 10000) {
      text = text.slice(0, 10000) + '...';
    }

    if (text.length < 50) {
      return new Response(
        JSON.stringify({ error: 'no_content', message: 'Could not extract meaningful text from that URL.' }),
        { status: 422, headers: corsHeaders }
      );
    }

    return new Response(
      JSON.stringify({ text }),
      { status: 200, headers: corsHeaders }
    );
  } catch (err) {
    const message = err.name === 'AbortError'
      ? 'URL took too long to respond (10s timeout).'
      : 'Could not fetch that URL. Check the link and try again.';
    return new Response(
      JSON.stringify({ error: 'fetch_error', message }),
      { status: 422, headers: corsHeaders }
    );
  }
}

export function handleCors() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
