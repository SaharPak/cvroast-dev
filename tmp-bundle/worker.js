var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// functions/api/roast.js
var SYSTEM_PROMPT = `You are the CV Roast skill \u2014 a research-backed CV evaluator for ALL tech and software roles in 2026. Your job is to roast (constructively) the CV the user pastes.

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
- 537,000 active U.S. tech listings, +8.9% YoY \u2014 market is growing but selective
- 97.8% of Fortune 500 use ATS; 75% of qualified candidates filtered before human review
- 70% of companies use AI to screen resumes; recruiters spend 6-7 seconds on initial scan
- AI-skilled workers earn 56% more across ALL roles (up from 25% in 2024)
- Each additional AI skill adds ~$18,000/year to compensation
- Senior roles outnumber junior 17:1 \u2014 projects and portfolio matter more at entry level
- 87% of recruiters check GitHub before interviews (engineers)
- Designers with no portfolio = no interview; portfolio IS the resume
- 62% of developers use AI tools daily \u2014 AI-augmented workflow is becoming baseline

## Universal Rules \u2014 What WORKS
- Single-column layout (ATS scrambles multi-column)
- Quantified impact in every bullet (scope, speed, adoption, savings, volume, reliability)
- Specific tool names matching JDs ("Kubernetes" not "container orchestration", "AWS" not "cloud")
- Cause-and-effect bullets ("Built X using Y, reducing Z by N%")
- Production scale numbers (users, requests/day, customers, uptime, cost saved)
- Soft skills phrased as actions ("Mentored 3 engineers; 2 promoted in 18 months" not "leadership")
- AI tools the candidate actually uses (any role: Cursor, Claude Code, Copilot, Midjourney, etc.)
- Public proof-of-work links (GitHub, portfolio, Medium, X, blog)

## Universal Rules \u2014 What FAILS
- Generic enthusiasm ("passionate about technology") \u2014 low-signal, filtered out
- Theoretical knowledge without shipped work ("familiar with" = red flag)
- Buzzword soup ("leveraged synergistic cloud-native solutions")
- Vague scale ("worked on large-scale systems" \u2014 100 users or 100M?)
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
- Design: Portfolio website (MANDATORY \u2014 no portfolio = score 1/5), Dribbble, Behance
- DevOps/SRE: GitHub (IaC repos, tools), blog, conference talks
- Security: GitHub, CTF rankings, bug bounty profiles
- EM/Lead: LinkedIn (detailed, active), blog, conference talks
- SE/DevRel: GitHub + blog + talks, YouTube, podcast

Score interpretation:
- 4.5+ \u2192 Strong, recommend applying
- 4.0-4.4 \u2192 Good, minor polish before applying
- 3.5-3.9 \u2192 Needs targeted rewrites in 2-3 sections
- Below 3.5 \u2192 Major restructure needed

## Universal Phrases to Strip Out
Flag these when found: "passionate about", "results-oriented", "proven track record", "leveraged",
"spearheaded", "synergies", "robust", "seamless", "cutting-edge", "innovative",
"in today's fast-paced world", "demonstrated ability to", "best practices".
"Facilitated" is OK only when describing actual workshop/session facilitation.

## Hard Rules (Never Break)
1. Never invent metrics \u2014 only reference numbers actually present in the candidate's CV.
2. Never use the cliche phrases listed above in any rewrite.
3. Always run the ATS compatibility check.
4. Always favor "shipped" language over "managed" or "responsible for."
5. Never use double dashes (\`--\`) \u2014 use commas, parentheses, or periods.
6. Never claim work the candidate didn't do \u2014 frame customizations and forks honestly.
7. Always state the detected role family and which weight profile you applied.

## Output Format (REQUIRED \u2014 follow exactly)

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

### Top 3 Rewrites (Before \u2192 After)

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

Be honest. If the CV is weak, give a low score. Don't inflate to be polite. The user explicitly asked for a roast \u2014 they want truth, not flattery. But always include actionable rewrites \u2014 never leave them with criticism alone.`;
async function handleRoast(request, env) {
  const corsHeaders2 = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json"
  };
  try {
    const ip = request.headers.get("CF-Connecting-IP") || "unknown";
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const rateLimitKey = `roast:${ip}:${today}`;
    const MAX_FREE_ROASTS = 3;
    if (env.RATE_LIMIT) {
      const used = parseInt(await env.RATE_LIMIT.get(rateLimitKey) || "0", 10);
      if (used >= MAX_FREE_ROASTS) {
        return new Response(
          JSON.stringify({
            error: "rate_limited",
            message: `You've used all ${MAX_FREE_ROASTS} free roasts for today. Try again in 24 hours, or fork the open-source skill on GitHub for unlimited use: https://github.com/SaharPak/ai-cv-roast`,
            remaining: 0
          }),
          { status: 429, headers: corsHeaders2 }
        );
      }
    }
    const body = await request.json();
    const cvText = (body.cv_text || "").trim();
    const jdText = (body.jd_text || "").trim();
    if (!cvText) {
      return new Response(
        JSON.stringify({ error: "missing_cv", message: "Paste your CV text first." }),
        { status: 400, headers: corsHeaders2 }
      );
    }
    if (cvText.length < 200) {
      return new Response(
        JSON.stringify({
          error: "cv_too_short",
          message: "That's not a CV \u2014 paste the full thing (at least a couple of paragraphs)."
        }),
        { status: 400, headers: corsHeaders2 }
      );
    }
    if (cvText.length > 5e4) {
      return new Response(
        JSON.stringify({
          error: "cv_too_long",
          message: "Your CV is too long (>50K characters). Trim it down \u2014 recruiters won't read more than 2 pages anyway."
        }),
        { status: 400, headers: corsHeaders2 }
      );
    }
    const userMessage = jdText ? `Here is my CV. Please roast it.

--- CV START ---
${cvText}
--- CV END ---

--- TARGET JOB DESCRIPTION ---
${jdText}
--- JD END ---

Use the JD to score keyword match precisely.` : `Here is my CV. Please roast it.

--- CV START ---
${cvText}
--- CV END ---`;
    const claudeResponse = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-5-20250929",
        max_tokens: 4e3,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: userMessage }]
      })
    });
    if (!claudeResponse.ok) {
      const errorText = await claudeResponse.text();
      console.error("Claude API error:", claudeResponse.status, errorText);
      return new Response(
        JSON.stringify({
          error: "api_error",
          message: "The AI is taking a coffee break. Try again in a minute."
        }),
        { status: 502, headers: corsHeaders2 }
      );
    }
    const claudeData = await claudeResponse.json();
    const markdown = claudeData?.content?.[0]?.text || "";
    const usage = claudeData?.usage || {};
    if (!markdown) {
      return new Response(
        JSON.stringify({ error: "empty_response", message: "Got an empty response. Try again." }),
        { status: 502, headers: corsHeaders2 }
      );
    }
    let totalRoasts = 0;
    if (env.RATE_LIMIT) {
      const currentUse = parseInt(await env.RATE_LIMIT.get(rateLimitKey) || "0", 10);
      await env.RATE_LIMIT.put(rateLimitKey, String(currentUse + 1), { expirationTtl: 86400 });
      const raw = await env.RATE_LIMIT.get("stats:total_roasts");
      totalRoasts = (parseInt(raw, 10) || 0) + 1;
      await env.RATE_LIMIT.put("stats:total_roasts", String(totalRoasts));
      const roastTokens = (usage.input_tokens || 0) + (usage.output_tokens || 0);
      const rawTokens = await env.RATE_LIMIT.get("stats:total_tokens");
      const newTotalTokens = (parseInt(rawTokens, 10) || 0) + roastTokens;
      await env.RATE_LIMIT.put("stats:total_tokens", String(newTotalTokens));
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
          total: inputTokens + outputTokens
        }
      }),
      { status: 200, headers: corsHeaders2 }
    );
  } catch (err) {
    console.error("Roast function error:", err);
    return new Response(
      JSON.stringify({
        error: "internal_error",
        message: "Something broke on our side. Try again, or open an issue on GitHub."
      }),
      { status: 500, headers: corsHeaders2 }
    );
  }
}
__name(handleRoast, "handleRoast");
async function handleFetchJd(request) {
  const corsHeaders2 = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json"
  };
  try {
    const body = await request.json();
    const url = (body.url || "").trim();
    if (!url || !/^https?:\/\//i.test(url)) {
      return new Response(
        JSON.stringify({ error: "invalid_url", message: "Please provide a valid URL." }),
        { status: 400, headers: corsHeaders2 }
      );
    }
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1e4);
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; CVRoast/1.0)",
        "Accept": "text/html,text/plain,application/xhtml+xml"
      }
    });
    clearTimeout(timeout);
    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: "fetch_failed", message: `Could not fetch URL (HTTP ${res.status}).` }),
        { status: 422, headers: corsHeaders2 }
      );
    }
    const html = await res.text();
    let text = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "").replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "").replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, "").replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, "").replace(/<header[^>]*>[\s\S]*?<\/header>/gi, "").replace(/<[^>]+>/g, " ").replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, '"').replace(/&#39;/gi, "'").replace(/\s+/g, " ").trim();
    if (text.length > 1e4) {
      text = text.slice(0, 1e4) + "...";
    }
    if (text.length < 50) {
      return new Response(
        JSON.stringify({ error: "no_content", message: "Could not extract meaningful text from that URL." }),
        { status: 422, headers: corsHeaders2 }
      );
    }
    return new Response(
      JSON.stringify({ text }),
      { status: 200, headers: corsHeaders2 }
    );
  } catch (err) {
    const message = err.name === "AbortError" ? "URL took too long to respond (10s timeout)." : "Could not fetch that URL. Check the link and try again.";
    return new Response(
      JSON.stringify({ error: "fetch_error", message }),
      { status: 422, headers: corsHeaders2 }
    );
  }
}
__name(handleFetchJd, "handleFetchJd");
function handleCors() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
__name(handleCors, "handleCors");

// functions/api/signup.js
var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json"
};
async function handleSignup(request, env) {
  try {
    const body = await request.json();
    const email = (body.email || "").trim().toLowerCase();
    if (!email || !EMAIL_RE.test(email)) {
      return new Response(
        JSON.stringify({ error: "invalid_email", message: "Please enter a valid email address." }),
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
      const ip = request.headers.get("CF-Connecting-IP") || "unknown";
      await env.RATE_LIMIT.put(kvKey, JSON.stringify({
        email,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        ip
      }));
    }
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: corsHeaders }
    );
  } catch (err) {
    console.error("Signup error:", err);
    return new Response(
      JSON.stringify({ error: "internal_error", message: "Something went wrong. Please try again." }),
      { status: 500, headers: corsHeaders }
    );
  }
}
__name(handleSignup, "handleSignup");
function handleSignupCors() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
__name(handleSignupCors, "handleSignupCors");

// functions/api/stats.js
var CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json"
};
async function handleStats(request, env) {
  try {
    let totalRoasts = 0;
    let totalTokens = 0;
    let feedbackViews = 0;
    let feedbackSubmissions = 0;
    if (env.RATE_LIMIT) {
      const raw = await env.RATE_LIMIT.get("stats:total_roasts");
      if (raw !== null) {
        totalRoasts = parseInt(raw, 10) || 0;
      }
      const rawTokens = await env.RATE_LIMIT.get("stats:total_tokens");
      if (rawTokens !== null) {
        totalTokens = parseInt(rawTokens, 10) || 0;
      }
      const rawViews = await env.RATE_LIMIT.get("views:feedback");
      if (rawViews !== null) {
        feedbackViews = parseInt(rawViews, 10) || 0;
      }
      const rawFeedback = await env.RATE_LIMIT.get("stats:total_feedback");
      if (rawFeedback !== null) {
        feedbackSubmissions = parseInt(rawFeedback, 10) || 0;
      }
    }
    return new Response(
      JSON.stringify({
        total_roasts: totalRoasts,
        total_tokens: totalTokens,
        feedback_page_views: feedbackViews,
        feedback_submissions: feedbackSubmissions
      }),
      { status: 200, headers: CORS_HEADERS }
    );
  } catch (err) {
    console.error("Stats handler error:", err);
    return new Response(
      JSON.stringify({ total_roasts: 0, total_tokens: 0 }),
      { status: 200, headers: CORS_HEADERS }
    );
  }
}
__name(handleStats, "handleStats");
function handleStatsCors() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
__name(handleStatsCors, "handleStatsCors");

// functions/api/feedback.js
var CORS_HEADERS2 = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json"
};
var MAX_BODY_BYTES = 2e4;
var MAX_PER_IP_PER_DAY = 5;
async function handleFeedback(request, env) {
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return json({ success: false, message: "Payload too large" }, 413);
    }
    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      return json({ success: false, message: "Invalid JSON" }, 400);
    }
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      return json({ success: false, message: "Invalid data" }, 400);
    }
    const required = ["job_search", "location", "role_target"];
    for (const field of required) {
      const v = data[field];
      if (typeof v !== "string" || v.length === 0 || v.length > 200) {
        return json({ success: false, message: `Missing or invalid: ${field}` }, 400);
      }
    }
    const ip = request.headers.get("CF-Connecting-IP") || "unknown";
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const ipKey = `fb_ip:${ip}:${today}`;
    if (env.RATE_LIMIT) {
      const countRaw = await env.RATE_LIMIT.get(ipKey);
      const ipCount = parseInt(countRaw, 10) || 0;
      if (ipCount >= MAX_PER_IP_PER_DAY) {
        return json({ success: false, message: "Daily limit reached" }, 429);
      }
      await env.RATE_LIMIT.put(ipKey, String(ipCount + 1), { expirationTtl: 86400 });
    }
    const id = Date.now() + "-" + Math.random().toString(36).slice(2, 8);
    const key = `feedback:${id}`;
    const stored = {
      ...data,
      _ip_hash: await hashIp(ip),
      _submitted_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    if (env.RATE_LIMIT) {
      await env.RATE_LIMIT.put(key, JSON.stringify(stored));
      const countRaw = await env.RATE_LIMIT.get("stats:total_feedback");
      const count = (parseInt(countRaw, 10) || 0) + 1;
      await env.RATE_LIMIT.put("stats:total_feedback", String(count));
    }
    return json({ success: true, id }, 200);
  } catch (err) {
    console.error("Feedback handler error:", err);
    return json({ success: false, message: "Server error" }, 500);
  }
}
__name(handleFeedback, "handleFeedback");
function handleFeedbackCors() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
__name(handleFeedbackCors, "handleFeedbackCors");
function json(body, status) {
  return new Response(JSON.stringify(body), { status, headers: CORS_HEADERS2 });
}
__name(json, "json");
async function hashIp(ip) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(ip));
  return Array.from(new Uint8Array(buf)).slice(0, 8).map((b) => b.toString(16).padStart(2, "0")).join("");
}
__name(hashIp, "hashIp");

// worker.js
var worker_default = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/api/feedback") {
      if (request.method === "OPTIONS") return handleFeedbackCors();
      if (request.method === "POST") return handleFeedback(request, env);
      return new Response("Method not allowed", { status: 405 });
    }
    if (url.pathname === "/api/roast") {
      if (request.method === "OPTIONS") return handleCors();
      if (request.method === "POST") return handleRoast(request, env);
      return new Response("Method not allowed", { status: 405 });
    }
    if (url.pathname === "/api/fetch-jd") {
      if (request.method === "OPTIONS") return handleCors();
      if (request.method === "POST") return handleFetchJd(request);
      return new Response("Method not allowed", { status: 405 });
    }
    if (url.pathname === "/api/signup") {
      if (request.method === "OPTIONS") return handleSignupCors();
      if (request.method === "POST") return handleSignup(request, env);
      return new Response("Method not allowed", { status: 405 });
    }
    if (url.pathname === "/api/stats") {
      if (request.method === "OPTIONS") return handleStatsCors();
      if (request.method === "GET") return handleStats(request, env);
      return new Response("Method not allowed", { status: 405 });
    }
    const response = await env.ASSETS.fetch(request);
    if (url.pathname === "/feedback" || url.pathname === "/feedback.html") {
      ctx.waitUntil(incrementPageView(env, "feedback"));
    }
    return response;
  }
};
async function incrementPageView(env, page) {
  if (!env.RATE_LIMIT) return;
  const key = `views:${page}`;
  const raw = await env.RATE_LIMIT.get(key);
  const count = (parseInt(raw, 10) || 0) + 1;
  await env.RATE_LIMIT.put(key, String(count));
}
__name(incrementPageView, "incrementPageView");
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map
