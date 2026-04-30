---
name: ai-cv-roast
description: >-
  Evaluate and build CVs and cover letters for AI Product Manager, AI Engineer, and
  technical PM roles in 2026. Use when the user asks to review a CV, evaluate a cover
  letter, write a tailored CV for a specific job, draft a cover letter, or asks "how
  does this look" / "is this good" about job application materials. Reflects 2026 market
  research from FAANG recruiters, AI hiring managers, and opinion leaders (Karpathy,
  Lenny Rachitsky, Marty Cagan, Claire Vo).
---

# AI CV Roast

This skill captures what actually works (and fails) when applying to AI PM, AI Engineer, and technical PM roles in 2026. Based on deep research across top recruiters and opinion leaders.

For full research evidence, see [RESEARCH.md](RESEARCH.md).
For detailed evaluation rubrics, see [EVALUATION.md](EVALUATION.md).
For concrete before/after examples, see [EXAMPLES.md](EXAMPLES.md).

---

## Core Truth (Repeat This in Every Evaluation)

> In 2026, "I've used AI tools to ship something real" beats "I have an AI certification" by 100x.

Every evaluation and rewrite must prioritize **evidence of shipped work** over credentials, theory, or buzzwords.

---

## 2026 Market Context (Always Apply)

| Reality | Implication |
|---|---|
| 300% growth in AI PM postings since 2023 | Market is hot |
| 3x more applications per AI PM role | Differentiation matters more |
| 70% of companies use AI to screen resumes | ATS-friendly is non-negotiable |
| 75% of qualified candidates rejected by ATS | Format MUST parse cleanly |
| 71% of hiring managers prefer junior + AI skills over senior + no AI | AI tooling experience > years of experience |
| 47% of employers report AI skills gap | Demonstrated AI builder = scarce currency |
| Companies hire 1/3 fewer PMs in AI-native firms | Selectivity is high |

---

## Universal Rules — What WORKS

| Element | Why |
|---|---|
| **Single-column layout** | ATS scrambles multi-column |
| **Quantified impact in every bullet** | Modern AI screeners weight this heavily |
| **Specific tool/model names matching JD** | "AWS Bedrock" not "cloud AI" |
| **Cause-and-effect bullets** | "Used X → reduced Y by Z%" |
| **Production scale numbers** | Users, requests/day, cost saved, customers affected |
| **Soft skills phrased as actions** | "Mentored 3 engineers" not "leadership" |
| **Case study URLs in summary** | Recruiter often only reads this section |
| **AI tools the candidate actually uses** | Cursor, Claude Code, n8n, LangChain, etc. |
| **Public proof-of-work links** | GitHub, Medium, X, blog — passive discovery is real |

## Universal Rules — What FAILS

| Mistake | Why |
|---|---|
| Generic AI claims ("passionate about AI") | Triggers immediate rejection |
| Theoretical knowledge without shipped work | "I'll learn it on the job" = death |
| Buzzword soup ("leveraged synergistic AI") | Hiring managers detect this fast |
| Missing infrastructure/deployment keywords | 68% of ML resumes rejected for this |
| Multi-column layouts or tables | Breaks ATS parsing |
| Owning a "tiny slice" with no accountability | Caught in interview |
| Cliché phrases ("results-oriented," "proven track record") | Empty signal |
| Listing certifications instead of shipped work | Bootcamps do not impress in 2026 |
| Cover letter that mirrors the resume | Wasted opportunity |

---

## CV Evaluation Framework (Run This When Asked to Review a CV)

Score each dimension 1-5. Global score is the weighted average.

| Dimension | Weight | What you're scoring |
|---|---|---|
| **Shipped Evidence** | 30% | Real, in-production AI/PM work with named tools and outcomes |
| **Quantified Impact** | 20% | Numbers in every bullet (scope, speed, adoption, savings) |
| **AI Tooling Visibility** | 15% | Cursor, Claude Code, n8n, LangChain, RAG, agents — explicitly named |
| **ATS Compatibility** | 15% | Single column, no tables, standard headings, parseable PDF |
| **Keyword Match to JD** | 10% | Exact terminology from posting present in the CV |
| **Public Proof Surface** | 10% | LinkedIn polished, GitHub active, Medium/blog/X visible |

**Score interpretation:**
- 4.5+ → Strong, recommend applying
- 4.0-4.4 → Good, minor polish before applying
- 3.5-3.9 → Needs targeted rewrites in 2-3 sections
- Below 3.5 → Major restructure needed

For the full evaluation rubric (with each dimension scoring guide), see [EVALUATION.md](EVALUATION.md).

---

## CV Building Framework (Run This When Building/Rewriting)

### Step 1: Read the candidate's source material
- The current CV (markdown, PDF, or pasted text)
- Any portfolio links, GitHub, LinkedIn the candidate provides
- The target JD (if provided)

### Step 2: Detect role archetype
Use one of these AI-era archetypes:
- AI Product Manager (LLM-powered features)
- AI Platform / LLMOps PM
- Agentic / Automation PM
- AI Engineer (production AI systems)
- Technical PM (AI-adjacent platform work)
- Identity / Platform PM
- Data PM / Analytics PM

### Step 3: Apply the Impact Bullet Formula
Every bullet must follow:

```
[Action verb] + [what was built/decided] + [tools or method used] + [quantified outcome]
```

Strong action verbs (vary them, don't repeat):
- Built, Shipped, Owned, Led, Drove, Architected, Migrated, Coordinated, Reduced, Increased, Cut, Compressed, Eliminated, Established, Mentored

**NEVER use:** Leveraged, spearheaded, facilitated, demonstrated ability to, passionate about, results-oriented, proven track record, robust, seamless, cutting-edge, in today's fast-paced world.

### Step 4: Extract scope numbers
For PMs at large companies who can't claim full company outcomes, use these 5 categories:

| Type | Example phrasing |
|---|---|
| **Scope** | "Affecting 500+ customers and 55,000+ user accounts" |
| **Speed** | "Drove design phase to 100% completion within 5 months" |
| **Process** | "Built 4-week refinement pipeline that eliminated developer idle time" |
| **Adoption** | "Shipped 10+ integrations adopted by 500+ enterprise clients" |
| **Volume** | "Led 20+ discovery sessions with stakeholders across 10+ teams" |

### Step 5: Add the AI Tooling section if missing
Include a dedicated section listing AI tools the candidate actually uses:
- AI coding: Cursor, Claude Code, GitHub Copilot
- Agentic / workflow: n8n, LangChain, LangGraph, CrewAI
- LLMs used: Claude, GPT, Gemini, Llama, Mistral
- Frameworks studied: any with completed coursework or shipped projects

### Step 6: Verify ATS compatibility
- Single column ✓
- No tables in experience sections ✓
- Standard section headings (Experience, Skills, Education) ✓
- Date format consistent (e.g., "Jan 2022 – Present") ✓
- ASCII characters only (no smart quotes; em-dashes converted to hyphens for safety) ✓

---

## Cover Letter Evaluation Framework

Score 1-5 across these dimensions:

| Dimension | Weight | What you're scoring |
|---|---|---|
| **Hook Quality** | 25% | First sentence is specific to the company, not generic |
| **Connection** | 20% | Bridges candidate's actual work to the company's actual work |
| **Proof** | 25% | Quantified, named tools, real outcomes — not strategy fluff |
| **Voice** | 15% | Sounds human, first person, not AI-generated boilerplate |
| **Ask** | 10% | Clear call to action — interview, conversation, next step |
| **Length** | 5% | 250-350 words max, 3 focused paragraphs |

---

## Cover Letter Building Framework

Use the **HCPA formula**: Hook, Connection, Proof, Ask.

### Hook (1-2 sentences)
Open with something specific the company did, said, or is building. NEVER start with:
- "I am writing to express my interest in..."
- "I am excited to apply for..."
- "As an experienced product manager..."

### Connection (1 paragraph)
Bridge from the company's specific need to the candidate's specific experience. Use ONE sentence from the JD verbatim, then map it to a real proof point.

### Proof (1 paragraph)
Quantified achievements, named tools, specific outcomes. Avoid:
- "Aligned stakeholders" (table stakes)
- "Defined product vision" (everyone says this)
- "Cross-functional leadership" (vague)

Replace with concrete examples from the candidate's experience, with numbers and tool names.

### Ask (1-2 sentences)
- "I would value 30 minutes to discuss how [specific thing] applies to [their challenge]."
- Always include a way to follow up.

---

## Universal Phrases to Strip Out

Search and remove from any candidate-facing document:

| Strip | Replace with |
|---|---|
| "passionate about" | Show passion through specific action |
| "results-oriented" | Show one specific result |
| "proven track record" | Quote the track record specifically |
| "leveraged" | "used" or name the tool |
| "spearheaded" | "led" or "ran" |
| "facilitated" | "ran" or "set up" |
| "synergies" | (delete) |
| "robust" | (delete or be specific) |
| "seamless" | (delete) |
| "cutting-edge" | name the technology |
| "innovative" | show one innovation |
| "in today's fast-paced world" | (delete) |
| "demonstrated ability to" | "did this thing" |
| "best practices" | name the practice |

---

## Output Format When Evaluating

Always structure CV/cover letter feedback as:

```markdown
## Score: X.X/5

### What Works
- Specific strengths with examples from the document

### What Needs Fixing
| Issue | Why it matters | How to fix |
|---|---|---|
| ... | ... | ... |

### Top 3 Rewrites (Most Impact)
1. [Specific bullet/sentence] → [Rewritten version]
2. ...
3. ...

### Optional Polish
- Smaller improvements, listed
```

---

## Output Format When Building

When writing a CV from scratch or doing a major rewrite:

1. **Read the JD first** — extract 15-20 keywords
2. **Detect archetype** — pick from the AI-era list above
3. **Read the candidate's existing material** — never invent
4. **Apply Impact Bullet Formula** to every bullet
5. **Show side-by-side** for the top 3 changes (before → after)
6. **Confirm with user before applying** changes to their CV

---

## Companion Files (Read When Needed)

| File | When to read |
|---|---|
| [RESEARCH.md](RESEARCH.md) | When user asks "why does this work?" or wants the source data |
| [EVALUATION.md](EVALUATION.md) | When doing a full CV/cover letter scoring with rubric |
| [EXAMPLES.md](EXAMPLES.md) | When user wants concrete before/after examples |

---

## Hard Rules (Never Break)

1. **Never invent metrics.** Numbers must come from the candidate's actual material or confirmed input.
2. **Never use the cliché phrases listed above** in any candidate-facing output.
3. **Always run ATS compatibility check** before considering a CV finished.
4. **Always favor "shipped" language** over "managed" or "responsible for."
5. **Always quantify** — if a number is missing, ask the candidate for it before writing the bullet.
6. **Never use double dashes (`--`)** in candidate-facing output — use commas, parentheses, or periods.
7. **Never claim work the candidate didn't do.** If a project was forked, customized, or co-built, frame it honestly.
