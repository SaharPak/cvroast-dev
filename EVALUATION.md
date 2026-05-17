# CV & Cover Letter Evaluation Rubric — All Tech Roles

Use this rubric for any full evaluation of a CV or cover letter. The scoring framework is **role-adaptive**: core dimensions stay the same, but weights shift based on role family. Follow it as a checklist; produce a score per dimension and a global score.

---

## Role Family Detection

Before scoring, detect the role family from the CV content or target JD:

| Role Family | Detect When |
|---|---|
| **Software Engineer** | Frontend, Backend, Full-stack, Web, Mobile, Embedded |
| **Data & ML** | Data Engineer, Data Scientist, ML Engineer, AI Engineer |
| **DevOps / SRE / Platform** | DevOps, SRE, Platform Engineer, Cloud Engineer, Infrastructure |
| **Design** | UX, UI, Product Designer, Interaction Designer, Design Systems |
| **Security** | Security Engineer, AppSec, Pentester, SOC, CISO |
| **Engineering Management** | Engineering Manager, Tech Lead, VP Engineering, CTO |
| **TPM** | Technical Program Manager, Program Manager (technical) |
| **QA / SDET** | QA Engineer, SDET, Test Automation, Quality |
| **Solutions / DevRel** | Solutions Engineer, Sales Engineer, Developer Advocate, DevRel |
| **Product Manager** | PM, Product Manager, AI PM, Group PM, Director of Product |

---

## Dimension Weights by Role Family

| Dimension | SWE | Data/ML | DevOps/SRE | Design | Security | EM/Lead | TPM | QA/SDET | SE/DevRel | PM |
|---|---|---|---|---|---|---|---|---|---|---|
| **Shipped Evidence** | 30% | 25% | 25% | 20% | 25% | 25% | 20% | 25% | 20% | 30% |
| **Quantified Impact** | 25% | 25% | 25% | 15% | 20% | 25% | 25% | 20% | 20% | 20% |
| **Tech/Tool Visibility** | 15% | 15% | 15% | 10% | 15% | 10% | 10% | 15% | 15% | 15% |
| **ATS Compatibility** | 10% | 10% | 10% | 5% | 10% | 10% | 15% | 10% | 10% | 15% |
| **Keyword Match** | 10% | 10% | 10% | 10% | 15% | 10% | 15% | 15% | 10% | 10% |
| **Public Proof Surface** | 10% | 15% | 15% | 40% | 15% | 20% | 15% | 15% | 25% | 10% |

**Why Design has 40% Public Proof:** For designers, the portfolio IS the application. A designer with a brilliant portfolio and mediocre CV will get interviews. A designer with a great CV and no portfolio will not.

**Why SE/DevRel has 25% Public Proof:** Communication IS the job. Blog posts, talks, open-source contributions are primary screening signals.

---

## CV Rubric — Full Detail

### 1. Shipped Evidence

What it measures: Real, in-production work with named users/customers, real outcomes, and specific technologies.

| Score | What it looks like |
|---|---|
| 5 | Multiple production-shipped projects with named users/customers, real outcomes, and technologies explicitly named. Evidence of end-to-end ownership. |
| 4 | At least one major shipped project with quantified scope; one or more additional shipped projects. |
| 3 | Some shipped work, but unclear ownership. Hard to tell who did what. |
| 2 | Mostly tutorials, courses, certifications. Demo projects but no real users/traffic. |
| 1 | No evidence of shipping; only theory, certifications, or aspirational language. |

**Role-specific signals:**

| Role | What "shipped" means |
|---|---|
| SWE | Code in production, serving real users/traffic, with uptime and scale numbers |
| Data/ML | Models in production, pipelines running reliably, dashboards used for decisions |
| DevOps/SRE | Infrastructure running at scale, incident response stories, platform adopted by teams |
| Design | Shipped features with before/after metrics, not just mockups |
| Security | Vulnerabilities found, incidents handled, compliance achieved |
| EM/Lead | Teams scaled, projects delivered, organizational outcomes |
| TPM | Programs completed, migrations executed, cross-team deliveries |
| QA/SDET | Test frameworks built and adopted, quality improvements measured |
| SE/DevRel | POCs delivered, developer adoption driven, community built |
| PM | Features shipped, metrics moved, products launched |

**Red flags (all roles):** "Familiar with..." / "Knowledge of..." with no demonstrated build.

### 2. Quantified Impact

What it measures: Numbers in every bullet — scope, speed, adoption, savings, volume, reliability.

| Score | What it looks like |
|---|---|
| 5 | Every bullet has at least one number. Mix of scope, speed, adoption, savings, or volume. |
| 4 | 70%+ of bullets quantified; the rest are clearly descriptive context. |
| 3 | Half the bullets have numbers; the rest are vague. |
| 2 | Few numbers; mostly "responsible for," "worked on." |
| 1 | Almost no numbers anywhere. |

**Quantification categories by role:**

| Category | SWE | DevOps/SRE | Data/ML | Design | EM | QA |
|---|---|---|---|---|---|---|
| **Scale** | Users served, requests/day, QPS | Services managed, deploys/week | Rows processed, models served | Users affected, sessions | Team size, headcount | Test cases, coverage % |
| **Speed** | Latency reduction, build time | MTTR, deploy time | Pipeline runtime, query speed | Time-to-task, flow time | Cycle time, velocity | Test runtime, feedback loop |
| **Reliability** | Uptime %, error rate | SLO attainment, incident count | Pipeline uptime, data quality | Error rate, accessibility | On-time delivery | Defect escape rate |
| **Cost** | Infra cost saved | Cloud spend reduced | Compute optimized | Design iteration saved | Budget managed | Manual testing reduced |
| **Adoption** | Feature usage, DAU | Platform users, dev adoption | Dashboard users, model consumers | Design system adoption | Retention, promotions | Framework adoption |

### 3. Tech/Tool Visibility

What it measures: Specific tools, frameworks, and technologies named — not generic categories.

| Score | What it looks like |
|---|---|
| 5 | Has a dedicated skills/tools section AND specific names appear inside experience bullets ("Built X using React + PostgreSQL + Redis"). |
| 4 | Tools named in either skills or experience but not both. |
| 3 | Tools mentioned generically ("cloud platforms," "modern frameworks"). |
| 2 | "Familiar with various tools" or vague mention. |
| 1 | No specific tools visible. |

**Role-specific tool expectations:**

| Role | Must-name tools (2026 baseline) |
|---|---|
| Frontend SWE | React/Vue/Angular, TypeScript, Next.js/Nuxt, CSS framework, build tools |
| Backend SWE | Language (Go/Python/Java/Node), framework, database, message queue, API style |
| Full-stack | Both frontend + backend stacks, deployment target |
| Data Engineer | Spark/dbt, cloud DW (Snowflake/BigQuery/Databricks), orchestrator (Airflow), streaming |
| Data Scientist | Python, SQL, statistical framework, visualization tool, experimentation platform |
| ML Engineer | PyTorch/TensorFlow, serving framework, MLOps tools, cloud ML platform |
| AI Engineer | LLM APIs, RAG framework, vector DB, evaluation tools, agent framework |
| DevOps/SRE | Container orchestration, IaC tool, CI/CD, observability stack, cloud provider |
| Platform Eng | IDP tools, golden paths, service catalog, developer experience tooling |
| Designer | Figma (baseline), prototyping tool, research tool, analytics integration |
| Security | SAST/DAST tools, SIEM, cloud security tools, compliance frameworks |
| EM/Lead | Not expected to list tools; technical credibility shown through architecture language |
| TPM | Project tools (JIRA/Linear), documentation tools, dashboards |
| QA/SDET | Test framework (Playwright/Cypress), CI integration, API test tool |
| SE/DevRel | Demo environments, documentation tools, the product they sell/advocate |
| PM | Analytics (Amplitude/Mixpanel), prototyping (Figma), project (Linear/JIRA) |

**AI tooling bonus (all roles):** +0.5 points if the candidate demonstrates AI tool usage in their workflow:
- **Engineers:** Cursor, Claude Code, GitHub Copilot, Continue, Aider
- **Designers:** Midjourney, Galileo AI, AI prototyping tools
- **Managers:** AI for planning, writing, analysis
- **QA:** AI-assisted test generation
- **DevOps:** AI for incident triage, runbook generation

### 4. ATS Compatibility

Run this check explicitly:

| Check | Pass condition |
|---|---|
| Single column? | Yes |
| Tables in experience section? | No |
| Standard headings? (Experience, Skills, Education, Projects) | Yes |
| Date format consistent? | "Jan 2022 -- Present" (or similar, applied uniformly) |
| Special characters? | No smart quotes, no em-dashes in critical fields, ASCII safe |
| Image-based PDF? | No (text must be selectable) |
| Header/footer with key info? | Headers/footers risk being skipped — keep contact info in body |
| Contact info parseable? | Email, phone, LinkedIn URL on separate lines, plain text |

Score = number of passes / total checks x 5.

**Designer exception:** Designers often use visually rich CVs. Score ATS on the "plain text" version they should have alongside their portfolio. If applying through ATS, the plain version matters. If portfolio link is the primary path, ATS matters less.

### 5. Keyword Match

When a JD is provided:
1. Extract 15-20 keywords from the JD (skills, tools, frameworks, soft skills)
2. Mark which appear in the CV (count exact matches)
3. Score = (matches / target) x 5, where target = 12 for senior, 10 for mid, 8 for junior

When no JD is provided, score against the role family's keyword set from RESEARCH.md.

**Important:** Match terminology exactly. If the JD says "Kubernetes," the CV should say "Kubernetes" not "K8s." Include both when possible: "Amazon Web Services (AWS)."

### 6. Public Proof Surface

| Score | What it looks like |
|---|---|
| 5 | Active across 3+ relevant channels with quality content matching the role. |
| 4 | Two channels active with quality content. |
| 3 | One channel polished (usually LinkedIn) but no depth elsewhere. |
| 2 | Stale or minimal public footprint. |
| 1 | No public proof. |

**What counts per role family:**

| Role | Primary proof channel | Secondary channels |
|---|---|---|
| SWE | GitHub (pinned repos with READMEs) | Blog, Stack Overflow, X |
| Data/ML | GitHub + notebook demos | Kaggle, blog, Hugging Face |
| DevOps/SRE | GitHub (IaC repos, tools) | Blog, conference talks |
| Design | Portfolio website (MANDATORY) | Dribbble, Behance, Medium |
| Security | GitHub, CTF rankings, bug bounty | Blog, conference talks |
| EM/Lead | LinkedIn (detailed, active) | Blog, conference talks, newsletter |
| TPM | LinkedIn (project descriptions) | Blog, internal case studies |
| QA/SDET | GitHub (test frameworks) | Blog, QA community contributions |
| SE/DevRel | GitHub + blog + talks | YouTube, podcast, newsletter |
| PM | LinkedIn + shipped product demos | Blog, side projects, X |

---

## Cover Letter Rubric

### 1. Hook Quality (25%)

| Score | What it looks like |
|---|---|
| 5 | Opens with something specific the company recently did, said, or shipped. Could only have been written for THIS company. |
| 4 | Opens with a specific point about the role or team. |
| 3 | Opens with candidate background tied to the role. |
| 2 | Generic but not painfully cliche. |
| 1 | "I am writing to express my interest..." or similar. |

### 2. Connection (20%)

| Score | What it looks like |
|---|---|
| 5 | Bridges the company's specific need to one named, quantified proof point from candidate's experience. |
| 4 | Connects company need to candidate experience but proof is vague. |
| 3 | Mentions both but doesn't bridge them. |
| 2 | Restates the JD without connecting to candidate. |
| 1 | No connection visible. |

### 3. Proof (25%)

| Score | What it looks like |
|---|---|
| 5 | 2-3 quantified proof points with specific tools and outcomes. |
| 4 | One strong proof + one weaker. |
| 3 | One proof point only. |
| 2 | Vague claims of impact. |
| 1 | No quantified proof. |

### 4. Voice (15%)

| Score | What it looks like |
|---|---|
| 5 | Sounds like a real person. First-person specific, occasional warmth, no buzzword soup. |
| 4 | Mostly human with one or two corporate phrases. |
| 3 | Acceptable but bland. |
| 2 | Reads like AI-generated boilerplate. |
| 1 | Pure AI-generated cliche. |

### 5. Ask (10%)

| Score | What it looks like |
|---|---|
| 5 | Specific ask: "I'd value 30 minutes to discuss [specific challenge]." Includes follow-up path. |
| 4 | Clear ask but generic ("I'd love to discuss this opportunity"). |
| 3 | Ask present but weak. |
| 2 | Vague closing. |
| 1 | No ask, just "Looking forward to hearing from you." |

### 6. Length (5%)

| Score | What it looks like |
|---|---|
| 5 | 250-350 words, 3 focused paragraphs |
| 4 | 350-450 words |
| 3 | 200-250 or 450-500 words |
| 2 | <200 or 500-600 words |
| 1 | Way too short or too long |

---

## Global Score Interpretation

| Score | Recommendation |
|---|---|
| 4.5-5.0 | Strong. Ready to apply. |
| 4.0-4.4 | Good. Minor polish recommended before sending. |
| 3.5-3.9 | Targeted rewrites needed in 2-3 sections. |
| 3.0-3.4 | Major rewrite required. List the top 3 issues. |
| Below 3.0 | Recommend NOT applying yet. Rebuild before submitting. |

---

## Output Template

When you complete an evaluation, format it as:

```markdown
## CV Evaluation: [Candidate / Role Family]

**Global Score: X.X/5**
**Role Family:** [detected]
**Weight Profile:** [role-specific weights applied]

| Dimension | Weight | Score | Notes |
|---|---|---|---|
| Shipped Evidence | X% | X/5 | ... |
| Quantified Impact | X% | X/5 | ... |
| Tech/Tool Visibility | X% | X/5 | ... |
| ATS Compatibility | X% | X/5 | ... |
| Keyword Match | X% | X/5 | ... |
| Public Proof Surface | X% | X/5 | ... |

### What Works (Top 3)
1. ...
2. ...
3. ...

### What Needs Fixing (Ranked by Impact)
1. **[Issue]** -- Why it matters -> How to fix
2. ...
3. ...

### Top 3 Rewrites (Before -> After)
1. **Before:** [exact text from CV]
   **After:** [rewritten version with quantification + tools]
2. ...
3. ...

### Recommendation
[Apply / Polish first / Major rewrite / Don't apply yet]
```
