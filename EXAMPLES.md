# Before/After Examples — All Tech Roles

Concrete examples showing the difference between weak and strong CVs across every tech role family in 2026.

---

## Table of Contents

1. [Software Engineer Examples](#software-engineer-examples)
2. [Data Engineer Examples](#data-engineer-examples)
3. [ML / AI Engineer Examples](#ml--ai-engineer-examples)
4. [DevOps / SRE / Platform Examples](#devops--sre--platform-examples)
5. [UX/UI / Product Designer Examples](#uxui--product-designer-examples)
6. [Security Engineer Examples](#security-engineer-examples)
7. [Engineering Manager Examples](#engineering-manager-examples)
8. [TPM Examples](#tpm-examples)
9. [QA / SDET Examples](#qa--sdet-examples)
10. [Solutions Engineer / DevRel Examples](#solutions-engineer--devrel-examples)
11. [Product Manager Examples](#product-manager-examples)
12. [Summary Section Examples](#summary-section-examples)
13. [Cover Letter Examples](#cover-letter-examples)
14. [Soft Skills Conversion Table](#soft-skills-conversion-table)
15. [Anti-Patterns Caught in the Wild](#anti-patterns-caught-in-the-wild)

---

## Software Engineer Examples

### Backend: Shipped Evidence

**Before (2.0/5)**
> Worked on backend services for the payment team.

**After (4.5/5)**
> Designed and shipped a high-throughput REST API in Python/FastAPI serving 50M+ requests/day with 99.98% uptime, processing $3.2M in daily payment volume across 15 countries.

**Why it works:** Named tech (FastAPI), scale (50M req/day), reliability (99.98%), business context ($3.2M, 15 countries).

---

### Frontend: Quantified Impact

**Before (2.5/5)**
> Built React components and improved page performance.

**After (4.5/5)**
> Rebuilt the checkout flow in React + Next.js, reducing Largest Contentful Paint from 4.2s to 1.1s and increasing conversion rate by 18% across 2M monthly visitors.

**Why it works:** Specific metrics (LCP, conversion %), named framework (React + Next.js), user scale (2M).

---

### Full-Stack: AI Tooling Visibility

**Before (2.0/5)**
> Used various AI tools to improve development speed.

**After (4.5/5)**
> Ship 3-4x faster using Cursor + Claude Code for implementation, code review, and test generation. Built an internal tool with Claude Sonnet 4 that auto-generates migration scripts from schema diffs, saving the team 8 hours/week.

**Why it works:** Specific tools (Cursor, Claude Code, Claude Sonnet 4), quantified speed (3-4x), quantified savings (8 hr/wk), real outcome (migration scripts).

---

## Data Engineer Examples

### Pipeline Reliability

**Before (2.5/5)**
> Maintained data pipelines and ensured data quality.

**After (4.5/5)**
> Rebuilt the core ELT pipeline in dbt + Airflow on Snowflake, processing 2.3B rows/day with 99.95% SLA compliance. Added Great Expectations data quality checks that caught 340+ schema-breaking changes before they reached production in 12 months.

**Why it works:** Named stack (dbt, Airflow, Snowflake), scale (2.3B rows/day), reliability (99.95% SLA), prevention metric (340+ catches).

---

### Real-Time Streaming

**Before (2.0/5)**
> Worked on streaming data infrastructure.

**After (4.5/5)**
> Designed a Kafka + Flink streaming pipeline ingesting 500K events/second from 12 microservices into Delta Lake, enabling real-time fraud detection that blocked $4.2M in fraudulent transactions in Q1 2026.

**Why it works:** Named tech (Kafka, Flink, Delta Lake), throughput (500K events/sec), business outcome ($4.2M fraud blocked), timeliness (Q1 2026).

---

## ML / AI Engineer Examples

### Production ML

**Before (2.5/5)**
> Built machine learning models for recommendation system.

**After (4.5/5)**
> Shipped a two-tower recommendation model in PyTorch serving 12M DAU with p99 latency of 45ms. Optimized with TensorRT quantization, cutting GPU costs by 62% while maintaining 98.3% of offline NDCG.

**Why it works:** Named framework (PyTorch), scale (12M DAU), latency (p99 45ms), cost optimization (62%), quality metric (NDCG).

---

### RAG Pipeline

**Before (2.0/5)**
> Implemented RAG system for document search.

**After (4.5/5)**
> Built a hybrid RAG pipeline using LangChain + pgvector with re-ranking (Cohere), achieving 94% answer accuracy on internal knowledge base of 50K+ documents. Reduced hallucination rate from 23% to 4.1% using structured citation grounding and DeepEval automated testing.

**Why it works:** Named stack (LangChain, pgvector, Cohere, DeepEval), accuracy (94%), hallucination reduction (23% to 4.1%), corpus scale (50K docs).

---

## DevOps / SRE / Platform Examples

### Infrastructure Scale

**Before (2.5/5)**
> Managed Kubernetes clusters and CI/CD pipelines.

**After (4.5/5)**
> Operated 14 production Kubernetes clusters across 3 AWS regions serving 200+ microservices. Designed the multi-cluster ArgoCD GitOps deployment pipeline that handles 500+ deployments/week with zero-downtime rollouts.

**Why it works:** Scale (14 clusters, 200+ services, 500+ deploys/wk), named tools (Kubernetes, AWS, ArgoCD), practice (GitOps, zero-downtime).

---

### Platform Engineering: Multiplier Work

**Before (2.0/5)**
> Built internal developer tools.

**After (4.5/5)**
> Built an Internal Developer Platform on Backstage with golden path templates for 6 service types, adopted by 180+ engineers. Cut new service creation from 3 days to 15 minutes and reduced developer onboarding time by 60%.

**Why it works:** Named tool (Backstage), adoption (180+ engineers), speed (3 days to 15 min), multiplier framing (onboarding -60%).

---

### SRE: Incident & Reliability

**Before (2.5/5)**
> Improved system reliability and reduced downtime.

**After (4.5/5)**
> Established SLO-based reliability program: defined error budgets for 45 services, reduced MTTR from 47 minutes to 8 minutes, and improved P1 incident frequency from 12/month to 3/month over 18 months using Prometheus + Grafana + PagerDuty automation.

**Why it works:** Named methodology (SLO, error budgets), scale (45 services), quantified improvement (MTTR 47m to 8m, incidents 12 to 3), named tools, timeframe.

---

## UX/UI / Product Designer Examples

### Shipped Design with Metrics

**Before (2.5/5)**
> Designed the new onboarding experience for the mobile app.

**After (4.5/5)**
> Redesigned the mobile onboarding flow from a 7-step wizard to a 3-step progressive disclosure pattern. Ran 12 usability tests, iterated on 4 prototypes in Figma, and shipped to 800K MAU. Result: onboarding completion rate increased from 34% to 71% and Day-7 retention improved by 22%.

**Why it works:** Specific design decision (7-step to 3-step), research evidence (12 usability tests, 4 prototypes), tool (Figma), scale (800K MAU), outcome (34% to 71%, +22% retention).

---

### Design System

**Before (2.0/5)**
> Created design system components.

**After (4.5/5)**
> Built and maintained a component library of 120+ Figma components with design tokens synced to Storybook. Adopted by 4 product teams, reducing design-to-dev handoff time by 40% and eliminating visual inconsistency bugs (from 15/sprint to 0).

**Why it works:** Scale (120+ components), tooling (Figma, Storybook, tokens), adoption (4 teams), impact (40% faster handoff, bugs eliminated).

---

### Research-Driven Decision

**Before (2.0/5)**
> Conducted user research to improve the product.

**After (4.5/5)**
> Led a discovery sprint with 8 customer interviews, 200-response survey, and Hotjar session analysis revealing that 62% of users abandoned the pricing page within 10 seconds. Redesigned the pricing comparison with interactive feature matrix, increasing plan upgrade conversion by 34%.

**Why it works:** Named methods (interviews, survey, Hotjar), specific finding (62% abandon), specific solution (interactive matrix), business outcome (+34% conversion).

---

## Security Engineer Examples

### Vulnerability Management

**Before (2.5/5)**
> Performed security assessments and vulnerability scanning.

**After (4.5/5)**
> Ran quarterly penetration tests across 30+ microservices, identifying and remediating 156 vulnerabilities (12 critical) in 2025. Integrated Snyk + Trivy into CI/CD pipeline, catching 89% of dependency vulnerabilities before merge.

**Why it works:** Scale (30+ services), quantified output (156 vulns, 12 critical), tooling (Snyk, Trivy), prevention rate (89% pre-merge).

---

### DevSecOps Integration

**Before (2.0/5)**
> Improved security in the development process.

**After (4.5/5)**
> Designed and deployed a DevSecOps pipeline using Checkov for IaC scanning, OPA/Rego for policy-as-code, and HashiCorp Vault for secrets management across 8 engineering teams. Reduced secrets-in-code incidents from 23/quarter to 0 and achieved SOC 2 Type II compliance 2 months ahead of schedule.

**Why it works:** Named tools (Checkov, OPA/Rego, Vault), scale (8 teams), elimination metric (23 to 0), compliance outcome (SOC 2 ahead of schedule).

---

## Engineering Manager Examples

### Team Delivery

**Before (2.5/5)**
> Led a team of engineers to deliver projects on time.

**After (4.5/5)**
> Grew the platform team from 4 to 12 engineers over 18 months while maintaining 92% sprint goal completion. Shipped the Auth0 migration (500+ customers, 55K user accounts) and two major API versioning releases, reducing customer-reported auth issues by 78%.

**Why it works:** Team growth (4 to 12), delivery metric (92% sprint goals), specific projects named, customer impact (78% fewer issues).

---

### People Development

**Before (2.0/5)**
> Mentored team members and helped them grow in their careers.

**After (4.5/5)**
> Promoted 4 engineers (2 to senior, 2 to staff) over 2 years. Implemented structured growth framework with bi-weekly career conversations, resulting in 95% retention rate in a team where the company average was 72%. One report went on to lead a 15-person team.

**Why it works:** Specific promotions (4 people, specific levels), retention quantified (95% vs 72% company avg), career outcome (report became a lead).

---

## TPM Examples

### Program Coordination

**Before (2.5/5)**
> Managed cross-functional technical programs.

**After (4.5/5)**
> Coordinated a 5-team, 60-engineer cloud migration program moving 200+ microservices from on-prem to AWS over 14 months. Managed 12 critical dependencies, resolved 45 blockers across teams, and delivered 2 weeks ahead of schedule with zero production incidents during cutover.

**Why it works:** Scale (5 teams, 60 engineers, 200+ services), specific program (cloud migration), dependency management (12 deps, 45 blockers), outcome (ahead of schedule, zero incidents).

---

### Risk Management

**Before (2.0/5)**
> Identified and mitigated project risks.

**After (4.5/5)**
> Built a dependency risk scoring system in JIRA that surfaced 8 critical-path blockers 3+ weeks before they would have impacted delivery. Introduced weekly cross-team syncs that reduced inter-team blocker resolution time from 11 days to 2.5 days.

**Why it works:** Specific tool (JIRA), quantified early warning (8 blockers, 3+ weeks early), process improvement (blocker resolution 11d to 2.5d).

---

## QA / SDET Examples

### Test Automation

**Before (2.5/5)**
> Automated test cases and improved test coverage.

**After (4.5/5)**
> Built a Playwright end-to-end test suite covering 340 critical user flows, running in GitHub Actions with parallel execution. Reduced regression testing from 3 days of manual effort to 45 minutes automated, catching 94% of regressions before production.

**Why it works:** Named framework (Playwright, GitHub Actions), scale (340 flows), speed (3 days to 45 min), effectiveness (94% catch rate).

---

### AI Product Testing

**Before (2.0/5)**
> Tested AI features and reported bugs.

**After (4.5/5)**
> Designed evaluation framework for the AI chatbot's response quality: built 500-question golden dataset, automated LLM-as-judge scoring pipeline using Claude, and established quality gates that prevented 12 degraded model versions from reaching production in Q1 2026.

**Why it works:** Specific methodology (golden dataset, LLM-as-judge), scale (500 questions), quantified prevention (12 bad versions caught), modern tooling.

---

## Solutions Engineer / DevRel Examples

### Solutions Engineering

**Before (2.5/5)**
> Supported sales team with technical demos and customer calls.

**After (4.5/5)**
> Led 80+ technical discovery calls and delivered 45 custom product demos in 2025, contributing to $8.2M in closed ARR. Built a reusable demo environment that cut POC setup time from 2 weeks to 2 hours and increased demo-to-close rate by 28%.

**Why it works:** Volume (80+ calls, 45 demos), revenue impact ($8.2M ARR), efficiency (2 wk to 2 hr), conversion metric (+28%).

---

### Developer Relations

**Before (2.0/5)**
> Created content and engaged with the developer community.

**After (4.5/5)**
> Published 24 technical tutorials (850K total views), spoke at 6 conferences (KubeCon, React Summit), and maintained 3 open-source SDKs with 12K+ combined GitHub stars. Developer sign-ups from content attributed to 35% of quarterly new activations.

**Why it works:** Volume (24 tutorials, 6 conferences), reach (850K views, 12K stars), named conferences, business attribution (35% of activations).

---

## Product Manager Examples

### AI Product Ship

**Before (2.5/5)**
> Led the development of AI features for the platform.

**After (4.5/5)**
> Owned the AI-powered search feature from discovery to launch: ran 15 user interviews, defined the RAG architecture with engineering, shipped to 200K users, and achieved 73% task completion rate (up from 41% with keyword search). Reduced hallucination rate from 18% to 3.2% through iterative prompt engineering and user feedback loops.

**Why it works:** Full lifecycle visible, quantified scope (200K users), specific improvement (41% to 73% task completion), technical depth (RAG, hallucination rate).

---

### Platform PM

**Before (2.0/5)**
> Managed the authentication and identity platform.

**After (4.5/5)**
> Led Auth0 migration design phase to 100% completion within 5 months across 10+ product teams and 500+ customers. Built 4-week rolling refinement pipeline that eliminated developer idle time. Coordinated with 100+ engineers to consolidate 3 separate identity systems into 1.

**Why it works:** Quantified timeline (5 months), scale (10+ teams, 500+ customers, 100+ engineers), process metric (100% refined), consolidation (3 to 1).

---

## Summary Section Examples

### Software Engineer

**Before (2.0/5)**
> Experienced software engineer with strong problem-solving skills and a passion for building scalable systems. Proven track record of delivering high-quality software in fast-paced environments.

**Problems:** Every phrase is a cliche. No specifics. Could be anyone.

**After (4.5/5)**
> Backend engineer with 6 years building high-throughput systems in Go and Python. At Stripe, designed the payment retry engine processing $2.1B/month across 35 countries. At Datadog, shipped the real-time anomaly detection pipeline handling 500K metrics/second. Currently exploring AI-augmented development with Cursor and Claude Code, building open-source tools for developer productivity.

**Why it works:** Named companies, named tech, specific systems, quantified scale, current AI activity.

---

### Designer

**Before (2.0/5)**
> Creative and detail-oriented product designer passionate about creating beautiful, user-centered experiences that delight users and drive business results.

**After (4.5/5)**
> Product designer who turns ambiguity into shipped features. At Shopify, led the checkout redesign that increased mobile conversion by 18% across 2M merchants. At Figma, built the component library used by 400+ internal designers. Process-driven: every project starts with research, every decision has a metric, every handoff has documentation. Portfolio: designername.com

**Why it works:** Specific companies, quantified outcomes, methodology visible, portfolio linked.

---

### DevOps/SRE

**Before (2.0/5)**
> DevOps engineer with extensive experience in cloud infrastructure, CI/CD, and automation. Strong knowledge of AWS and Kubernetes.

**After (4.5/5)**
> SRE who thinks in error budgets, not uptime percentages. At Spotify, operated 200+ microservices across 14 Kubernetes clusters with 99.99% availability. Built the GitOps deployment pipeline that handles 500+ deploys/week. Currently building an open-source Terraform module library for multi-cloud compliance (github.com/username/terraform-compliance).

**Why it works:** Methodology signal (error budgets), named company and tech, scale numbers, open-source link.

---

## Cover Letter Examples

### SWE Hook Comparison

**Before (1.5/5)**
> I am writing to express my interest in the Senior Backend Engineer position. I have 8 years of experience and believe I would be a great fit.

**After (4.5/5)**
> Your migration from a monolith to event-driven microservices on Kafka caught my eye in your recent engineering blog post. At Stripe, I led a similar decomposition for the payment retry system, and the lessons about eventual consistency under high write loads are still the hardest problems I've solved.

---

### Designer Hook

**Before (1.5/5)**
> I am excited to apply for the Product Designer role at Figma. As a passionate designer with 5 years of experience, I would love to contribute to your team.

**After (4.5/5)**
> Config 2026 sold me on Figma's bet that design systems will be the API layer between design and engineering. I've been living that thesis: at Shopify, I built the component library that 400+ designers use daily, and the hardest lesson was that adoption is a product problem, not a design problem.

---

### DevOps Proof Paragraph

**Before (1.5/5)**
> I have extensive experience with Kubernetes, Terraform, and AWS. I am proficient in CI/CD and have managed infrastructure for several companies. I am confident I can bring value to your team.

**After (4.5/5)**
> Three examples: (1) I built the ArgoCD-based GitOps pipeline at Spotify that handles 500+ deployments/week across 14 clusters with zero-downtime rollouts. (2) I designed the SLO framework for 45 services that reduced P1 incidents from 12/month to 3/month. (3) I open-sourced a Terraform module library for multi-cloud compliance that has 2K+ GitHub stars and is used by 50+ companies.

---

## Soft Skills Conversion Table

| Cliche claim | Specific action equivalent |
|---|---|
| "Strong leadership skills" | "Grew team from 4 to 12; promoted 4 engineers (2 to senior, 2 to staff) in 2 years" |
| "Excellent communication" | "Ran weekly sync across 4 time zones for 2 years; published 12 internal RFCs" |
| "Cross-functional collaboration" | "Coordinated migration across 10+ product teams and 100+ engineers" |
| "Strategic thinker" | "Designed consolidation roadmap reducing 3 identity systems to 1" |
| "Problem solver" | "Diagnosed slow pipelines, rebuilt in dbt + Airflow, cut runtime from 6h to 45min" |
| "Detail-oriented" | "Caught 3 critical security gaps during infrastructure review" |
| "Self-starter" | "Built and shipped open-source tool with 2K+ GitHub stars on personal time" |
| "Team player" | "Pair-programmed with 4 engineers during Kubernetes migration onboarding" |
| "Passionate about technology" | "Speaker at KubeCon 2025, published 12 technical blog posts in 2025" |
| "Results-oriented" | "Reduced MTTR from 47 minutes to 8 minutes over 18 months" |
| "Fast learner" | "Onboarded to Rust codebase, shipped first production PR in 2 weeks" |
| "Creative problem solver" | "Designed A/B test framework that increased experiment velocity by 3x" |

---

## Anti-Patterns Caught in the Wild

### Anti-pattern 1: Multi-column / fancy layout
> Resume uses two columns, icons, progress bars for skills.
> **Result:** ATS skips entire sections. Candidate appears to have no skills.
> **Fix:** Single column, clean formatting. Save the design for your portfolio site.

### Anti-pattern 2: Generic tech enthusiasm
> "Passionate about leveraging cutting-edge cloud-native technologies."
> **Result:** Pattern-matched as low-signal by AI screeners. Filtered out.
> **Fix:** Replace with one specific system, one specific outcome: "Built GitOps deployment pipeline on ArgoCD handling 500+ deploys/week."

### Anti-pattern 3: Vague scale
> "Worked on large-scale distributed systems."
> **Result:** Reader has no idea if "large-scale" means 100 users or 100M users.
> **Fix:** "Distributed system processing 50M requests/day across 3 AWS regions with 99.98% uptime."

### Anti-pattern 4: Responsibility without ownership
> "Responsible for maintaining CI/CD pipelines."
> **Result:** Sounds like the work was assigned, not owned. No initiative visible.
> **Fix:** "Rebuilt CI/CD pipeline in GitHub Actions, cutting build time from 45 min to 4 min and enabling 500+ deploys/week."

### Anti-pattern 5: Certifications without shipped work
> Lists AWS Solutions Architect, CKA, Terraform Associate, but no infrastructure projects.
> **Result:** Reads as "studied DevOps" not "did DevOps." Filtered out at senior levels.
> **Fix:** Lead with the project; mention the cert as supporting context.

### Anti-pattern 6: Designer CV without portfolio link
> Beautiful CV with impressive bullet points, but no portfolio URL.
> **Result:** Immediately disqualified. For designers, no portfolio = no interview.
> **Fix:** Portfolio link in header AND summary. Make it the first thing visible.

### Anti-pattern 7: Keyword stuffing
> Skills section lists 50+ technologies including ones never used.
> **Result:** Modern AI screeners detect padding and penalize. Recruiters spot it in seconds.
> **Fix:** List only technologies you can discuss in an interview. Match naturally in experience bullets.

### Anti-pattern 8: Manager CV that reads like an IC CV
> Engineering manager resume is all technical projects, no people or organizational impact.
> **Result:** Looks like an IC who got a title bump, not a real leader.
> **Fix:** Lead with team growth, promotions, retention, delivery velocity, org-level outcomes.

### Anti-pattern 9: Cover letter that mirrors resume
> Cover letter restates the same bullets as the resume in paragraph form.
> **Result:** Wasted opportunity. Recruiter learns nothing new.
> **Fix:** Cover letter tells the story BEHIND the bullets. Why this company, why now, why you.

### Anti-pattern 10: Missing infrastructure/deployment for ML
> ML engineer resume is all model architecture, no serving or deployment.
> **Result:** 68% of ML resumes rejected for missing MLOps keywords.
> **Fix:** Include serving framework (vLLM, Ray Serve), monitoring, cost optimization, latency numbers.
