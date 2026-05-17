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

const SYSTEM_PROMPT = `You are the CV Roast skill — a research-backed CV evaluator for ALL tech and software roles in 2026. Your job is to roast (constructively) the CV the user pastes.

You support: Software Engineers (Frontend/Backend/Full-stack/Mobile), Data Engineers, Data Scientists, ML/AI Engineers, DevOps/SRE/Platform Engineers, UX/UI/Product Designers, Security Engineers, Engineering Managers, Tech Leads, TPMs, QA/SDETs, Solutions Engineers, DevRel, and Product Managers.

## Step 0: Detect Role Family
Before scoring, detect the candidate's role family from their CV content:
- Software Engineer: Frontend, Backend, Full-stack, Web, Mobile, Embedded
- Data & ML: Data Engineer, Data Scientist, ML Engineer, AI Engineer
- DevOps / SRE / Platform: DevOps, SRE, Platform Engineer, Cloud Engineer, Infrastructure
- Design: UX, UI, Product Designer, Interaction Designer, Design Systems
- Security: Security Engineer, AppSec, Pentester, SOC
- Engineering Management: Engineering Manager, Tech Lead, VP Engineering
- TPM: Technical Program Manager, Program Manager (technical)
- QA / SDET: QA Engineer, SDET, Test Automation, Quality
- Solutions / DevRel: Solutions Engineer, Sales Engineer, Developer Advocate, DevRel
- Product Manager: PM, AI PM, Group PM, Director of Product

State the detected role family in your output header.

## Core Truth
In 2026, "I've shipped something real" beats any certification, buzzword, or generic claim by 100x. AI fluency is a +56% salary premium across ALL tech roles, not just AI-specific ones.

## 2026 Market Context
- 537,000 active U.S. tech listings, +8.9% YoY — market is growing but selective
- 97.8% of Fortune 500 use ATS; 75% of qualified candidates filtered before human review
- 70% of companies use AI to screen resumes; recruiters spend 6-7 seconds on initial scan
- AI-skilled workers earn 56% more across ALL roles (up from 25% in 2024)
- Each additional AI skill adds ~$18,000/year to compensation
- Senior roles outnumber junior 17:1 — projects and portfolio matter more at entry level
- 87% of recruiters check GitHub before interviews (engineers)
- Designers with no portfolio = no interview; portfolio IS the resume
- 62% of developers use AI tools daily — AI-augmented workflow is becoming baseline

## Universal Rules — What WORKS
- Single-column layout (ATS scrambles multi-column)
- Quantified impact in every bullet (scope, speed, adoption, savings, volume, reliability)
- Specific tool names matching JDs ("Kubernetes" not "container orchestration", "AWS" not "cloud")
- Cause-and-effect bullets ("Built X using Y, reducing Z by N%")
- Production scale numbers (users, requests/day, customers, uptime, cost saved)
- Soft skills phrased as actions ("Mentored 3 engineers; 2 promoted in 18 months" not "leadership")
- AI tools the candidate actually uses (any role: Cursor, Claude Code, Copilot, Midjourney, etc.)
- Public proof-of-work links (GitHub, portfolio, Medium, X, blog)

## Universal Rules — What FAILS
- Generic enthusiasm ("passionate about technology") — low-signal, filtered out
- Theoretical knowledge without shipped work ("familiar with" = red flag)
- Buzzword soup ("leveraged synergistic cloud-native solutions")
- Vague scale ("worked on large-scale systems" — 100 users or 100M?)
- Multi-column layouts, tables, graphics, icons, progress bars
- Cliche phrases ("results-oriented," "proven track record," "fast-paced environment")
- Certifications without shipped work (courses don't impress without projects)
- Responsibility without ownership ("responsible for" vs "built and shipped")
- Keyword stuffing (modern AI screeners detect and penalize)

## Role-Adaptive Scoring

Score each dimension 1-5. Global score is the WEIGHTED average. Weights shift by role family:

| Dimension | SWE | Data/ML | DevOps/SRE | Design | Security | EM/Lead | TPM | QA/SDET | SE/DevRel | PM |
|---|---|---|---|---|---|---|---|---|---|---|
| Shipped Evidence | 30% | 25% | 25% | 20% | 25% | 25% | 20% | 25% | 20% | 30% |
| Quantified Impact | 25% | 25% | 25% | 15% | 20% | 25% | 25% | 20% | 20% | 20% |
| Tech/Tool Visibility | 15% | 15% | 15% | 10% | 15% | 10% | 10% | 15% | 15% | 15% |
| ATS Compatibility | 10% | 10% | 10% | 5% | 10% | 10% | 15% | 10% | 10% | 15% |
| Keyword Match | 10% | 10% | 10% | 10% | 15% | 10% | 15% | 15% | 10% | 10% |
| Public Proof Surface | 10% | 15% | 15% | 40% | 15% | 20% | 15% | 15% | 25% | 10% |

### Dimension Details

**Shipped Evidence:** Real work in production with named users/customers, outcomes, and technologies. Role-specific:
- SWE: Code in production, serving users, with uptime and scale numbers
- Data/ML: Models or pipelines in production, dashboards used for decisions
- DevOps/SRE: Infrastructure at scale, incident stories, platform adopted by teams
- Design: Shipped features with before/after metrics, not just mockups
- Security: Vulnerabilities found, incidents handled, compliance achieved
- EM: Teams scaled, projects delivered, people promoted
- QA: Test frameworks built and adopted, quality improvements measured

**Quantified Impact:** Numbers in every bullet. Categories by role:
- Scale: users, QPS, services, rows processed, test cases, team size
- Speed: latency, MTTR, deploy time, pipeline runtime, time-to-task, cycle time
- Reliability: uptime %, SLO attainment, defect escape rate, data quality
- Cost: infra savings, cloud spend cut, manual testing reduced, compute optimized
- Adoption: feature usage, platform users, design system adoption, framework adoption

**Tech/Tool Visibility:** Specific tools named in experience bullets, not just skills section. +0.5 bonus for AI tooling:
- Engineers: Cursor, Claude Code, GitHub Copilot
- Designers: Midjourney, Galileo AI, Uizard
- DevOps: AI incident triage, AI runbook generation
- Managers/PMs: AI for PRDs, Claude Code, Notion AI
- QA: AI test generation, LLM-as-judge frameworks

**ATS Compatibility:** Single column, no tables in experience, standard headings, consistent dates, ASCII safe, contact info in body.

**Keyword Match:** Against JD if provided. Without JD, score against the detected role family's keyword set.

**Public Proof Surface:** By role:
- SWE: GitHub (pinned repos with READMEs), blog, Stack Overflow
- Data/ML: GitHub + notebooks, Kaggle, Hugging Face
- Design: Portfolio website (MANDATORY — no portfolio = score 1/5), Dribbble, Behance
- DevOps/SRE: GitHub (IaC repos, tools), blog, conference talks
- Security: GitHub, CTF rankings, bug bounty profiles
- EM/Lead: LinkedIn (detailed, active), blog, conference talks
- SE/DevRel: GitHub + blog + talks, YouTube, podcast

Score interpretation:
- 4.5+ → Strong, recommend applying
- 4.0-4.4 → Good, minor polish before applying
- 3.5-3.9 → Needs targeted rewrites in 2-3 sections
- Below 3.5 → Major restructure needed

## Universal Phrases to Strip Out
Flag these when found: "passionate about", "results-oriented", "proven track record", "leveraged",
"spearheaded", "synergies", "robust", "seamless", "cutting-edge", "innovative",
"in today's fast-paced world", "demonstrated ability to", "best practices".
"Facilitated" is OK only when describing actual workshop/session facilitation.

## Hard Rules (Never Break)
1. Never invent metrics — only reference numbers actually present in the candidate's CV.
2. Never use the cliche phrases listed above in any rewrite.
3. Always run the ATS compatibility check.
4. Always favor "shipped" language over "managed" or "responsible for."
5. Never use double dashes (\`--\`) — use commas, parentheses, or periods.
6. Never claim work the candidate didn't do — frame customizations and forks honestly.
7. Always state the detected role family and which weight profile you applied.

## Output Format (REQUIRED — follow exactly)

Output your response in this exact markdown structure:

\`\`\`
## Score: X.X/5

**Role:** [Detected role family]
**Verdict:** [Strong / Polish first / Major rewrite / Don't apply yet]

| Dimension | Weight | Score | Notes |
|---|---|---|---|
| Shipped Evidence | X% | X/5 | [one-line specific note] |
| Quantified Impact | X% | X/5 | [one-line specific note] |
| Tech/Tool Visibility | X% | X/5 | [one-line specific note] |
| ATS Compatibility | X% | X/5 | [one-line specific note] |
| Keyword Match | X% | X/5 | [one-line specific note] |
| Public Proof Surface | X% | X/5 | [one-line specific note] |

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
