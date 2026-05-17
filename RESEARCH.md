# Research Evidence — Tech Job Market 2026

This is the source data behind the scoring rules in `SKILL.md`. Cite it when the user asks "why does this matter?" or "where does this come from?"

Research conducted: May 2026.

---

## Table of Contents

1. [Cross-Role Market Reality](#cross-role-market-reality)
2. [The AI Skills Premium](#the-ai-skills-premium)
3. [ATS Reality in 2026](#ats-reality-in-2026)
4. [Software Engineers](#software-engineers)
5. [Data Engineers, Data Scientists & ML Engineers](#data-engineers-data-scientists--ml-engineers)
6. [DevOps, SRE & Platform Engineers](#devops-sre--platform-engineers)
7. [UX/UI & Product Designers](#uxui--product-designers)
8. [Security Engineers & AppSec](#security-engineers--appsec)
9. [Engineering Managers & Tech Leads](#engineering-managers--tech-leads)
10. [Technical Program Managers](#technical-program-managers)
11. [QA Engineers & SDET](#qa-engineers--sdet)
12. [Solutions Engineers, Sales Engineers & DevRel](#solutions-engineers-sales-engineers--devrel)
13. [AI Product Managers](#ai-product-managers)
14. [AI Engineers](#ai-engineers)
15. [Cover Letter Research](#cover-letter-research)
16. [Public Proof Surface](#public-proof-surface)
17. [How Hiring Actually Works in 2026](#how-hiring-actually-works-in-2026)
18. [What Top Opinion Leaders Say](#what-top-opinion-leaders-say)
19. [Sources Consulted](#sources-consulted)

---

## Cross-Role Market Reality

| Stat | Source |
|---|---|
| 537,000 active U.S. tech job listings (March 2026), +8.9% YoY | Cadence |
| 17% projected SWE employment growth through 2033 (+327,900 U.S. jobs) | BLS via Boundev |
| 97.8% of Fortune 500 companies use ATS to filter candidates | KraftCV |
| 65% of employers increased AI screening tools in 2026 | KraftCV |
| 80% of employers still insist final hiring decisions are human-led | KraftCV |
| Recruiters spend 6-7 seconds on initial resume scan | NestCV |
| 76.4% of recruiters filter candidates by skills match | KraftCV |
| Senior roles outnumber junior positions 17:1 in May 2026 | DEV Community |
| Junior developer postings remain down 40% vs pre-2022 | Cadence |
| Junior hiring down 25% at Big Tech | Boundev |
| 62% of developers use AI tools, nearly half daily | Boundev |
| India projected to surpass U.S. as #1 developer population by 2028 | Boundev |

**The bifurcation:** The market is hot for specialists and cold for generalists. AI-specialized roles surge while general SWE postings are down 49% vs pre-pandemic. Engineers with 2+ AI skills earn 43% more than peers without them.

---

## The AI Skills Premium

The AI wage premium applies to ALL tech roles, not just AI-specific positions.

| Role Category | AI-Skilled Median | Non-AI Median | Premium |
|---|---|---|---|
| Engineers (mid-level) | $208,000 | $132,000 | +58% |
| Engineers (lead/manager) | $416,000 | $244,200 | +70% |
| All workers (cross-industry) | Varies | Varies | +56% (up from 25% in 2024) |

Source: AI Wage Gap Q1 2026 Report, AI Pulse

**Per-skill uplift:** Each additional AI skill adds ~$18,000 to annual compensation.

**Fastest-growing AI premium by non-tech function:** HR (+66% YoY), Consulting (+58%), Marketing (+50%), Finance (+40%), Legal (+34%).

**Implication for CV Roast:** Even non-AI roles benefit from demonstrating AI fluency. A DevOps engineer who uses AI for incident triage or a designer who uses AI for prototyping should surface that on their CV.

---

## ATS Reality in 2026

ATS evolved from Gen 1 (keyword matching, 2015-2019) to Gen 3 (LLM-based screening, 2024-present).

| Stat | Source |
|---|---|
| 97.8% of Fortune 500 use ATS | TieCV, KraftCV |
| 75% of qualified applicants rejected by ATS before human review | TieCV |
| 70% of companies use AI to screen resumes | GetNewResume |

**What modern AI screeners evaluate:**
- Keyword relevance and exact terminology from the posting
- Experience depth and seniority progression
- Structural coherence (clean parsing)
- Quantified impact (percentages, dollar amounts — increasingly weighted)
- Skill-experience cross-reference (skills must appear in experience bullets, not just a skills section)
- Credential verification

**Critical formatting rules (all roles):**
- Single column, no tables, no text boxes, no graphics
- Standard section headings
- Consistent date formats
- .docx or .pdf (not scanned image PDFs)
- No keyword stuffing — modern AI detects and penalizes it

---

## Software Engineers

### Frontend, Backend & Full-Stack

#### Market Numbers

| Stat | Source |
|---|---|
| Average SWE salary: $145,800 base (6.8% YoY growth) | EngineerSalaryData |
| Junior (0-2 yr): $98,500 | EngineerSalaryData |
| Mid (2-5 yr): $128,600 | EngineerSalaryData |
| Senior (5-10 yr): $158,900 | EngineerSalaryData |
| Staff+ (10+ yr): $190,200 | EngineerSalaryData |
| AI/ML SWE specialization: $168,500 (18.2% growth) | EngineerSalaryData |
| Full-stack: $138,900 (6.3% growth) | EngineerSalaryData |
| Backend inflation: 8-12% annually, Go developers especially hot | Brainsource |
| Frontend inflation: 6-9% (deeper talent pool) | Brainsource |
| General SWE postings down 49% vs pre-pandemic | Cadence |
| AI/ML SWE postings up 59% vs pre-pandemic | Cadence |

#### What Employers Actually Want

1. **Production systems at scale** — "Designed and shipped a high-throughput REST API serving 50M+ requests/day with 99.98% uptime" beats "Worked on backend services"
2. **Ownership language** — "Architected," "Owned," "Built" not "Worked on," "Helped with," "Assisted"
3. **Quantified impact** — Latency reduction, uptime, deployment frequency, users served, cost saved
4. **Specific tech stack match** — If the JD says "Kubernetes," don't write "K8s." Include both when possible: "Amazon Web Services (AWS)"
5. **AI tooling fluency** — 62% of developers now use AI tools. Engineers who ship with Cursor, Copilot, Claude Code should make this visible

#### Keywords Recruiters Scan For

**Languages:** Python, JavaScript, TypeScript, Java, Go, Rust, C++, Kotlin, Swift
**Frontend:** React, Next.js, Vue, Angular, Svelte, Tailwind CSS, Web Components
**Backend:** Node.js, Django, FastAPI, Spring Boot, Express, NestJS, gRPC
**Cloud/Infra:** AWS, GCP, Azure, Docker, Kubernetes, Terraform, CI/CD
**Databases:** PostgreSQL, MongoDB, Redis, Elasticsearch, DynamoDB, Cassandra
**Practices:** Microservices, event-driven architecture, API design, system design, distributed systems

#### Resume Structure by Seniority

- **Junior (0-2 yr):** Education → Skills → Personal Projects → Experience
- **Mid (3-6 yr):** Skills → Work Experience → Projects → Education
- **Senior/Staff+:** Work Experience with architecture and ownership evidence → Technical Leadership → Skills → Education

---

## Data Engineers, Data Scientists & ML Engineers

#### Market Numbers

| Stat | Source |
|---|---|
| AI Engineer median salary: $185K | Second Talent |
| ML Engineer median: $165K | Second Talent |
| Data Scientist median: $140K | Second Talent |
| Data Engineer median: $125K-$135K base | KORE1 |
| Data Engineer total comp (mid): $179.5K-$202K | ML Data Jobs |
| AI Engineer demand: +74% YoY | Second Talent |
| ML Engineer demand: +38% YoY | Second Talent |
| Data Scientist demand: flattened to +12% YoY | Second Talent |
| Data Engineer demand: +23% annual, 2.9M unfilled global vacancies | KORE1 |
| 78% of organizations now use AI in at least one function | Second Talent |

#### What Employers Want — Ranked

**Data Engineers:**
1. Pipeline reliability and observability (not just ETL)
2. Cloud data platform expertise (Snowflake, Databricks, BigQuery)
3. Real-time streaming (Kafka, Flink, Spark Streaming)
4. Data quality and governance
5. Cost optimization and FinOps awareness

**Data Scientists:**
1. Business impact quantification (revenue, retention, churn prediction accuracy)
2. Experimentation design (A/B testing, causal inference)
3. Communication of findings to non-technical stakeholders
4. ML model deployment (not just notebooks)
5. Domain expertise in specific verticals

**ML Engineers:**
1. Production ML systems (not Kaggle, not demos)
2. MLOps: model serving, monitoring, retraining pipelines
3. LLM integration and fine-tuning
4. Cost/latency optimization (not just accuracy)
5. Infrastructure: Kubernetes, Ray, vLLM, GPU clusters

#### Keywords

**Data Engineering:** Apache Spark, Airflow, dbt, Snowflake, Databricks, BigQuery, Redshift, Kafka, Flink, Delta Lake, Iceberg, Great Expectations, data lineage, data mesh
**Data Science:** Python, R, SQL, pandas, scikit-learn, XGBoost, A/B testing, causal inference, Bayesian methods, Tableau, Looker, Amplitude
**ML Engineering:** PyTorch (68% market share), TensorFlow, MLflow, Kubeflow, Weights & Biases, SageMaker, Vertex AI, ONNX, TensorRT, vLLM, Ray Serve

---

## DevOps, SRE & Platform Engineers

#### Market Numbers

| Stat | Source |
|---|---|
| DevOps/SRE salary: $162,400 avg (14.7% growth) | EngineerSalaryData |
| Junior DevOps (0-2 yr): $100K-$140K | HackerX |
| Mid DevOps/SRE (3-5 yr): $150K-$200K | HackerX |
| Senior SRE median: $185K base, $200K-$350K+ total at Big Tech | jobstrack |
| Platform Engineers: $112K-$275K+ total comp | KORE1 |
| 80% of large orgs to have platform teams by end of 2026 (up from 45% in 2022) | Gartner via KORE1 |
| Platform engineering: fastest-growing DevOps specialization | KORE1 |

#### What Employers Want — Ranked

1. **Quantified reliability impact** — Uptime %, MTTR improvements, SLO attainment
2. **Kubernetes at production depth** — Cluster design, Helm, service meshes, not just `kubectl apply`
3. **Infrastructure as Code mastery** — Terraform, Pulumi, CloudFormation with strategic depth
4. **Multiplier work** — "Built platform used by 200+ engineers" > "Managed infrastructure"
5. **Incident ownership** — Real on-call stories with postmortems and systemic fixes
6. **DevSecOps** — Secrets management, policy-as-code, container scanning, supply chain security
7. **Cost optimization** — FinOps, right-sizing, spot instances, reserved capacity planning

#### Keywords

**Core:** Docker, Kubernetes, Terraform, Ansible, AWS/GCP/Azure, Linux, CI/CD, GitHub Actions, GitLab CI, ArgoCD, Jenkins
**Observability:** Prometheus, Grafana, OpenTelemetry, Datadog, PagerDuty, ELK stack
**Platform:** Internal Developer Platform (IDP), golden paths, Backstage, Crossplane, Helm charts
**SRE:** SLO/SLI/SLA, error budgets, chaos engineering, capacity planning, incident management, runbooks
**Advanced:** Service mesh (Istio, Linkerd), FinOps, zero-trust, GitOps, Canary deployments, feature flags

#### Certifications That Actually Move the Needle

- AWS Certified DevOps Engineer — Professional
- Certified Kubernetes Administrator (CKA)
- HashiCorp Terraform Associate
- Google Cloud Professional DevOps Engineer

---

## UX/UI & Product Designers

#### Market Numbers

| Stat | Source |
|---|---|
| Junior (0-2 yr): $60K-$80K, median ~$70K | Scalify |
| Mid (2-5 yr): $85K-$115K, median ~$100K | Scalify |
| Senior (5-8 yr): $115K-$150K, median ~$132K | Scalify |
| Lead/Principal (8+ yr): $140K-$180K, median ~$158K | Scalify |
| Director/VP: $170K-$250K+ | Scalify |
| Product designers earn highest at each level (full-spectrum responsibility) | Scalify |
| 16% employment growth projected (2022-2032) | BLS |
| Figma required in 85%+ of product design roles | Webflow Jobs |
| Remote-only design positions: ~21% (down from 30% in 2022) | Authentic Jobs |
| Figma/Webflow specialists earn 10-20% above standard | Webflow Jobs |
| ~5,000 design job postings monthly | Authentic Jobs |

#### What Employers Want — Ranked

1. **Process, not just polish** — Portfolios showing methodology, constraints, trade-offs outperform polished-only finals
2. **Measurable outcomes** — "Reduced cart abandonment from 73% to 41% on mobile" not "Redesigned checkout"
3. **Full-spectrum capability** — Discovery, IA, interaction, visual, measurement (5 phases). Highest earners excel across all 5
4. **Design system thinking** — Components, tokens, patterns — not just one-off screens
5. **AI-augmented workflow** — Designers using AI for prototyping, copy, research synthesis stand out
6. **Accessibility** — WCAG 2.1 AA as baseline, not afterthought

#### Portfolio Requirements (Critical for Designers)

Unlike engineers where GitHub is a bonus, portfolio IS the resume for designers.

**Must-have structure per case study:**
1. Problem statement — specific metrics or behavioral evidence
2. Constraints — timeline, team size, technical/scope limits
3. Research — key learnings that influenced decisions
4. Process — iterations, rough sketches, explorations (polished-only = red flag)
5. Decisions — reasoning behind key design choices
6. Outcome — measurable results after shipping

**Hiring managers evaluate:** Can this person define problems with evidence, make decisions under constraints, connect design to business outcomes, and show professional maturity?

**Format:** 2-3 strong case studies that capture interest within 5 minutes. Quality over quantity.

#### Keywords/Tools

**Design tools:** Figma (baseline), Framer, ProtoPie, Sketch, Adobe Creative Suite
**Prototyping:** Figma prototyping, Framer, Principle, After Effects (motion)
**Research:** UserTesting, Maze, Hotjar, Optimal Workshop, Dovetail
**Analytics:** Amplitude, Mixpanel, Google Analytics, FullStory
**Design systems:** Tokens, components, variants, documentation, Storybook
**AI-augmented:** Midjourney, Galileo AI, Uizard, Relume, AI copy tools
**Development crossover:** Webflow (10-20% salary premium), basic HTML/CSS, Tailwind

---

## Security Engineers & AppSec

#### Market Numbers

| Stat | Source |
|---|---|
| Average cybersecurity salary: $135,969 | Axis Intelligence |
| Entry-level: $62K-$90K | Axis Intelligence |
| Mid-level: $107K-$148K | Axis Intelligence |
| Senior: $180K-$420K+ | Axis Intelligence |
| Junior AppSec median: $121K | Orbyt |
| Cleared AppSec roles: +10-40% premium | CyberSecJobs |
| 29% projected employment growth (2024-2034) | BLS |
| 514,000 U.S. cybersecurity job postings (June 2025) | CyberDesserts |
| 95% of security teams report skills deficiency | CyberDesserts |
| 53% of employers willing to increase starting comp for in-demand security skills | Robert Half |
| Cybersecurity salary: $159,800 avg (11.3% growth) | EngineerSalaryData |

#### What Employers Want — Ranked

1. **Practical security experience** — Pentesting results, vulnerabilities found and fixed, incident response
2. **DevSecOps integration** — Security in CI/CD, not just audits after the fact
3. **Cloud security depth** — IAM, network policies, container scanning, secrets management
4. **Compliance knowledge** — SOC 2, ISO 27001, GDPR, HIPAA depending on industry
5. **AI safety** — Growing demand; AI Safety Research skills command +15% premium

#### Keywords

**Core:** Penetration testing, vulnerability assessment, SAST/DAST, OWASP Top 10, threat modeling, incident response
**Cloud security:** AWS Security Hub, Azure Sentinel, GCP Security Command Center, IAM, VPC, WAF
**DevSecOps:** Snyk, Dependabot, Trivy, Checkov, OPA/Rego, secrets scanning, supply chain security
**Compliance:** SOC 2, ISO 27001, GDPR, HIPAA, FedRAMP, NIST
**Advanced:** Zero Trust Architecture, SIEM (Splunk, Sentinel), EDR, purple teaming, red teaming
**Highest-premium skills:** Security clearance (TS/SCI: +20%), AI Safety (+15%), Kubernetes (+11%), Rust (+10%)

---

## Engineering Managers & Tech Leads

#### Market Numbers

| Stat | Source |
|---|---|
| EM median base: $156,500 | LeadDev |
| Senior EM: $136K-$168K | Research.com |
| 45% of tech managers plan to increase starting salaries | LeadDev |
| Only 5% of EM roles are fully remote | RoleBeaver |
| Bay Area: ~30% of EM positions | RoleBeaver |
| Amazon: 27% of tracked EM roles, Google: 17%, Apple: 11% | RoleBeaver |
| AI companies (Anthropic, OpenAI, Waymo) aggressively expanding management layers | RoleBeaver |

#### What Employers Want — Ranked

1. **Delivery track record** — Shipped projects, teams scaled, velocity improvements quantified
2. **People development** — Promotions, retention, career growth stories
3. **Technical credibility** — Can still read code, make architecture decisions, unblock engineers
4. **Business acumen** — Connecting engineering work to revenue, cost, customer outcomes
5. **AI/ML production experience** — Even for non-AI teams, understanding AI integration is expected
6. **Cross-functional leadership** — Working with product, design, data, infrastructure

#### Keywords

**Management:** Team building, hiring, performance management, 1:1s, career development, retention
**Delivery:** Agile, Scrum, Kanban, sprint velocity, cycle time, deployment frequency, DORA metrics
**Technical:** System design, architecture review, tech debt management, build vs buy decisions
**Strategy:** Roadmap planning, OKRs, resource allocation, vendor management, budget ownership
**Tools:** JIRA, Linear, GitHub, Notion, Confluence, Datadog, PagerDuty

---

## Technical Program Managers

#### Market Numbers

| Stat | Source |
|---|---|
| Entry-level TPM: $90K-$125K | Jobicy |
| Mid-level TPM: $130K-$135K median | PayScale |
| Senior TPM: $158K-$170K+ | Jobicy |
| Top 10% earners: $170K+ | Jobicy |
| Mid-career total comp: $104K-$178K | PayScale |
| Demand: "very high," driven by cloud-native complexity | Jobicy |

#### What Employers Want

1. **Cross-functional coordination at scale** — Multiple teams, multiple timelines, competing priorities
2. **Technical depth** — SDLC, system architecture awareness, API understanding
3. **Data-driven delivery** — Metrics, dashboards, risk quantification
4. **Stakeholder management** — Alignment across engineering, product, business, legal
5. **Program-level impact** — "Coordinated 5-team migration affecting 200+ microservices" not "Managed project timeline"

#### Keywords

**Core:** SDLC, cross-functional coordination, risk management, dependency mapping, release management
**Technical:** System architecture, API design, CI/CD concepts, cloud platforms, technical documentation
**Tools:** JIRA, Confluence, Smartsheet, MS Project, Linear, Notion
**Metrics:** On-time delivery rate, blocker resolution time, dependency risk score, milestone hit rate

---

## QA Engineers & SDET

#### Market Numbers

| Stat | Source |
|---|---|
| Senior QA/Test Automation: $108,233 avg ($81K-$141K) | PayScale |
| QA Automation: $84,250-$118,750 | Robert Half |
| General QA median: $101K-$102,610 | KORE1, QualityAssuranceJobs |
| Entry QA: $58K-$78K | QualityAssuranceJobs |
| Senior QA: $110K-$145K | QualityAssuranceJobs |
| AI QA Engineers: $120K-$160K+ (20-30% premium) | Remote Job Assistant |
| Playwright overtook Selenium as top framework in 2026 | Remote Job Assistant |
| 500+ fully remote QA positions tracked | Remote Job Assistant |

**Critical salary gap:** SDETs with Playwright/Cypress ($120K-$140K+) vs manual QA testers ($60K-$85K) — same title, 60-80% pay difference.

#### What Employers Want

1. **Automation-first mindset** — Manual testing alone is not competitive
2. **Modern frameworks** — Playwright (2026 leader), Cypress, not just Selenium
3. **CI/CD integration** — Tests that run in pipelines, not manual test runs
4. **AI product validation** — Human validation of AI outputs is a growth area
5. **Performance testing** — k6, Locust, Artillery alongside functional testing

#### Keywords

**Frameworks:** Playwright (top in 2026), Cypress, Selenium, Appium, Detox
**Languages:** Python, JavaScript/TypeScript, Java
**CI/CD:** GitHub Actions, Jenkins, GitLab CI, CircleCI
**API testing:** Postman, REST Assured, Karate
**Performance:** k6, Locust, Artillery, JMeter
**Practices:** BDD (Cucumber), TDD, shift-left testing, contract testing, visual regression

---

## Solutions Engineers, Sales Engineers & DevRel

#### Market Numbers

| Stat | Source |
|---|---|
| Sales Engineer median: $121,520, top earners $202,670+ | Apollo |
| Solutions Engineer: $120K-$180K | BLS via DemoToDeals |
| Twilio SE average: $148,334, total $135K-$208K | PayScale |
| DevRel entry-level: $110K | BetterCV |
| DevRel mid-level: $150K | BetterCV |
| DevRel senior: $190K | BetterCV |
| SF/NYC premium: +30-80% for DevRel | BetterCV |
| SE roles growing 5% faster than average through 2034 | Apollo |
| AI tools handle 35% of pre-demo research tasks | Apollo |

#### What Employers Want

**Solutions/Sales Engineers:**
1. Technical discovery and needs analysis
2. Live product demonstrations
3. Proof-of-concept building
4. Technical objection handling
5. Post-sale technical success

**Developer Relations:**
1. Technical content creation (blogs, docs, tutorials)
2. Developer advocacy and community building
3. Conference speaking and demo building
4. Feedback loop between developers and product team
5. Open-source contribution and maintenance

#### Keywords

**SE/Sales Eng:** Technical discovery, solution architecture, demo environments, POC, RFP/RFI response, Salesforce, Gong
**DevRel:** Developer advocacy, technical writing, API documentation, SDK development, community management, conference speaking, open-source

---

## AI Product Managers

#### Market Numbers

| Stat | Source |
|---|---|
| 300% growth in AI PM postings since 2023 | Best PM Jobs |
| 600+ open AI PM positions globally | Best PM Jobs |
| 3x more applications per AI PM role vs traditional PM | Institute of PM |
| $192K-$437K total comp (25-40% premium over traditional PM) | Best PM Jobs |
| AI PM median: $192K-$300K base | Best PM Jobs |
| 47% of employers report AI skills gap | Industry survey |
| 71% of hiring managers prefer junior + AI skills over senior + no AI | Industry survey |
| Companies hire 1/3 fewer PMs in AI-native firms | Industry observation |

#### What Employers Want — Ranked

1. **AI Product Intuition** — Where AI adds genuine value vs hype
2. **Technical Fluency** — Understanding LLMs, RAG, agents, evaluation metrics (NOT implementation)
3. **Demonstrated Building** — Shipped projects, not certifications
4. **Core PM Skills** — User research, prioritization, stakeholder management

**Killer quote:**
> "We've hired PMs with no ML background who demonstrated exceptional product intuition for AI. We've also rejected candidates with ML PhDs who couldn't articulate how AI creates user value."

#### Keywords

**Technical:** LLM, RAG, agents, fine-tuning, prompt engineering, evaluation metrics, hallucination rate, guardrails, embeddings
**Product:** User research, A/B testing, prioritization frameworks, roadmap, OKRs, north star metric
**Tools:** Amplitude, Mixpanel, Hotjar, Linear, Notion, Figma, Miro
**AI-specific:** Claude API, OpenAI API, LangChain, model evaluation, safety/alignment, human-in-the-loop

---

## AI Engineers

#### Market Numbers

| Stat | Source |
|---|---|
| AI Engineer mid-level median: $160K-$210K | Resume Optimizer Pro |
| AI Engineer senior median: $220K-$300K | Resume Optimizer Pro |
| AI-skilled engineer median: $208K (vs $132K non-AI) | AI Wage Gap |
| RAG appears in 70% of new AI engineering roles | MirrorCV |
| 68% of ML resumes rejected for missing MLOps keywords | NeuraCV |

#### What Employers Want

1. Production AI shipped to real users (not Kaggle, not demos)
2. Infrastructure & deployment (68% rejected for missing this)
3. RAG pipelines + vector databases (in 70% of roles)
4. Specific tools named (PyTorch at 68% share)
5. Cost & latency improvements — not just accuracy

#### Keywords

**LLM + Prompting:** OpenAI, Anthropic, Llama, Mistral; prompt engineering, function calling, tool use
**Retrieval + Vector:** Pinecone, Weaviate, pgvector, Qdrant; embeddings, hybrid search, re-ranking
**Frameworks:** LangChain, LangGraph, LlamaIndex, CrewAI
**Evaluation:** ragas, DeepEval, LangSmith, hallucination detection
**Inference & Infra:** vLLM, Ray Serve, Modal, Kubernetes, Docker
**Cloud:** AWS Bedrock, Azure AI Foundry, GCP Vertex AI

---

## Cover Letter Research

### When to Write One (Role-Specific)

| Role Family | Cover Letter Value |
|---|---|
| AI Product Manager | Moderate — useful for framing non-obvious fit |
| Software Engineer | Low — 26% of recruiters consider important, most skip |
| Data Engineer | Low — strong resume + portfolio carry more weight |
| Designer | Moderate — portfolio is primary, letter supplements |
| DevOps/SRE | Low — certifications + GitHub > letter |
| Security | Moderate — useful for clearance roles, career transitions |
| Engineering Manager | Moderate to High — narrative matters for leadership |
| TPM | Moderate — useful for showing program scope |
| QA/SDET | Low — automation skills speak louder |
| Solutions/Sales Eng | High — communication IS the job |
| DevRel | High — writing quality IS the screening signal |

### Universal Rules

**Always write when:**
- Job posting explicitly requests one
- Applying to small company/startup (<200 employees, 3x more likely to read)
- Making non-obvious career change
- Have a referral or genuine connection

**Can skip when:**
- No cover letter field in application
- Optional field and nothing specific to say (generic hurts more than none)
- Large company with high-volume ATS process

### The HCPA Formula (All Roles)

- **Hook**: Specific to the company, not generic
- **Connection**: Bridges your work to their work
- **Proof**: Quantified, named tools, real outcomes
- **Ask**: Clear next step

### Length

250-350 words max, 3 focused paragraphs, half a page.

---

## Public Proof Surface

### By Role Family

| Role | What Matters Most | Secondary |
|---|---|---|
| Software Engineer | GitHub (87% of recruiters check), pinned repos with READMEs | Blog, Stack Overflow, X |
| Data Engineer | GitHub (pipelines, dbt projects), Kaggle (if relevant) | Blog, conference talks |
| ML/AI Engineer | GitHub + arXiv papers, model demos | Blog, Hugging Face models |
| Designer | Portfolio website (mandatory) | Dribbble, Behance, Medium case studies |
| DevOps/SRE | GitHub (IaC repos, open-source tools) | Blog, conference talks |
| Security | GitHub, CTF rankings, bug bounty profiles | Blog, conference talks |
| EM/Tech Lead | LinkedIn (polished, active), blog | Conference talks, newsletter |
| TPM | LinkedIn (detailed project descriptions) | Blog |
| QA/SDET | GitHub (test frameworks, automation repos) | Blog |
| SE/DevRel | GitHub, blog, conference talks, YouTube | Podcast, newsletter |
| AI PM | LinkedIn + shipped product demos, blog | GitHub side projects, X |

### GitHub Specifics (Engineers)

**87% of tech recruiters check GitHub before interview decisions.** Candidates with active profiles get 40% more interview callbacks.

**What recruiters evaluate in 30-90 seconds:**
1. Profile picture + bio (consistent with LinkedIn)
2. Contribution graph (sustained, not burst)
3. Pinned repos (3-6 substantive projects, not tutorials)
4. README quality (problem statement, tech choices, quick start)

**Red flags:** Spaghetti code, no documentation, one-day activity spikes, repos named "project1"

**Critical:** Poor GitHub hurts more than good GitHub helps. Pin fewer repos rather than padding with weak work.

---

## How Hiring Actually Works in 2026

### The New Funnel (All Tech Roles)

1. **Recruiter scans public content** (GitHub, LinkedIn, portfolio, blog)
2. **AI screens resume** (3-7 seconds, keyword + impact matching)
3. **Human reviews top 10%**
4. **Networking outperforms applying** (warm intro = 10x conversion)
5. **Speed matters** — companies moving from screen to offer in weeks, not months, win talent

### Workplace Arrangement

| Arrangement | Share of AI/ML roles | Share of all tech |
|---|---|---|
| Onsite | 55% | ~50% |
| Hybrid | 18.4% | ~30% |
| Fully Remote | 26.7% | ~14-20% |

**Hybrid premium:** Hybrid AI/ML roles pay $253K-$257K avg vs $218K-$221K for remote or onsite — because they concentrate in high-cost metros at senior levels.

---

## What Top Opinion Leaders Say

### Andrej Karpathy (Ex-OpenAI, Tesla AI Director)

> "I haven't written code since December 2025. I direct AI agents now."

- **"Intent engineering"** is the new senior skill
- Manual line-by-line coding is becoming a "legacy skill"
- Critical: decomposing goals, specifying instructions to agents, fast macro-level review

**CV implication (all roles):** If a candidate directs AI agents to ship real work, that's the new senior signal. Make it visible.

### Marty Cagan (Silicon Valley Product Group)

- PMs are MORE important in the AI era, not less
- Strong judgment + AI tools = the rare valuable combo
- AI tools amplify product sense, but can't replace it

**CV implication:** Lead with judgment and outcomes, then prove AI fluency.

### Claire Vo (LaunchDarkly, ChatPRD founder)

- Lowercase c communication (docs, requirements) = replaced by AI
- Capital C Communication (vision, influence, relationships) = stays human
- Focus on where you add unique value beyond AI

**CV implication:** Emphasize vision, relationship-building, bold decisions. De-emphasize documentation work.

### Lenny Rachitsky (ex-Airbnb PM)

Four dimensions still apply: product sense, analytical ability, execution, communication/influence.
- Junior: product sense + analytical dominate
- Senior: execution + influence dominate

**CV implication:** Match emphasis to seniority level.

### FAANG Recruiter Consensus (2026)

- Personalization beats automation — mass outreach is dead
- Speed at Meta: apply within 24 hours, use high-ownership language
- Warm intros = 10x conversion vs cold applications
- Engineers optimize for problem quality, not salary

---

## Sources Consulted

### Cross-Role Market
- boundev.ai — "Software Engineering Job Market 2026"
- cadence.withremote.ai — "Engineering Hiring Market in 2026: Deep Dive"
- engineersalarydata.com — "Software Engineer Salary Report April 2026"
- trifleck.com — "State of the SWE Job Market for 2026"
- brainsource.io — "Engineering Salary Inflation Tracker Q1 2026"
- hirejack.com — "Q2 2026 Tech Hiring Report"
- roberthalf.com — "2026 Technology Job Market: In-Demand Roles"
- dev.to/remoet — "Tech Job Market Report: May 2026"
- aiwagegap.com — "AI Wage Gap Q1 2026 Report"
- christianandtimbers.com — "2026 Corporate AI Compensation Study"
- pin.com — "AI Compensation Benchmarks 2026"

### Software Engineers
- kraftcv.com — "Software Engineer Resume Guide 2026: Junior to FAANG"
- formation.dev — "The Software Engineer Resume Guide for Top Tech Roles"
- cvcomp.com — "ATS-Optimized Software Engineer Resume 2026"
- nestcv.com — "How to Write a Software Engineer Resume in 2026"
- ophyai.com — "Tech Resume Guide 2026"
- huntwiseai.com — "Software Engineer Resume Checklist 2026"

### Data & ML
- mldatajobs.com — "Data Job Market Insights 2026"
- secondtalent.com — "AI Engineer vs ML Engineer vs Data Scientist 2026"
- kore1.com — "Data Engineer Salary Guide 2026"
- theaimarketpulse.com — "AI Engineer vs Data Scientist in 2026"

### DevOps/SRE/Platform
- itsearch.ie — "DevOps & SRE Jobs: 2026 Hiring Trends"
- kore1.com — "Platform Engineer: Role, Skills & Salary in 2026"
- hackerx.org — "DevOps Job Market 2026"
- switchtodevops.com — "DevOps vs SRE vs Platform Engineer 2026"
- jobstrack.io — "DevOps & SRE Career Guide 2026"
- scoremyresume.co — "DevOps Resume Tips 2026"
- techinterview.org — "DevOps SRE Platform Engineer Resume Guide"

### Design
- scalify.ai — "UX/UI Designer Salary: Full 2026 Breakdown"
- webflow.jobs — "UX/UI Designer Salary 2026"
- uxcel.com — "Product Designer Salary Guide 2026"
- authenticjobs.com — "How to Get a Design Job in 2026"
- producthub.dk — "How to Write UX Case Studies"
- designtablepodcast.com — "How to Build a UX Portfolio That Gets You Hired"

### Security
- axis-intelligence.com — "Cybersecurity Salary 2026: Complete Breakdown"
- orbytjobs.ai — "Junior Application Security Engineer Salary 2026"
- blog.cyberdesserts.com — "Cybersecurity Career Report 2026"
- cybersecjobs.com — "Cleared AppSec Engineer Jobs Guide"

### Engineering Management
- davron.net — "2026 Engineering Hiring Market: Trends"
- rolebeaver.com — "Top Companies Hiring EMs 2026"
- wiz.io — "Engineering Manager Job Description 2026"
- research.com — "Senior Engineering Manager Careers 2026"
- leaddev.com — "What US Engineering Managers Can Expect 2026"

### TPM
- jobicy.com — "Technical Program Manager Career Path 2026"
- interviewkickstart.com — "9 TPM Skills You Need in 2026"
- payscale.com — "Mid-Career TPM Salary 2026"
- tpminstitute.org — "How to Hire the Right TPM"

### QA/SDET
- payscale.com — "Senior QA/Test Automation Engineer Salary 2026"
- roberthalf.com — "QA Automation Engineer Salary 2026"
- remotejobassistant.com — "Remote QA Engineer Jobs 2026"
- kore1.com — "QA Engineer Salary Guide 2026"
- qualityassurancejobs.com — "QA Engineer Salary Guide 2026"

### Solutions/Sales/DevRel
- apollo.io — "Who Is A Sales Engineer? 2026"
- bettercv.app — "Developer Relations Engineer Salary Guide 2026"
- demotodeals.com — "Solutions Engineer vs Sales Engineer 2026"

### Cover Letters
- techinterview.org — "Cover Letters for Engineers 2026"
- gittohire.com — "Cover Letters for Developers 2026"
- techncv.com — "Cover Letter vs Resume 2026"
- careery.pro — "Data Engineer Cover Letter 2026"

### GitHub/Public Proof
- vamotalent.com — "Hiring Engineers from GitHub 2026"
- techinterview.org — "GitHub Profile Polish for Engineers"
- docs.bswen.com — "What Recruiters Look For in GitHub"
- gittohire.com — "Optimize GitHub Profile for Job Hunting 2026"

### Workplace Trends
- 8bitconcepts.com — "Q2 2026 Remote vs Onsite AI Hiring"
- aidevboard.com — "Remote vs Hybrid vs Onsite AI Engineer Salaries 2026"

### AI PM & AI Engineer (from prior research)
- bestpmjobs.com, institutepm.com, exzev.com, howworks.ai
- resumeoptimizerpro.com, neuracv.com, mirrorcv.com, writecv.ai
- tiecv.com, hivekit.ai, getnewresume.com, veriipro.com
- svpg.com (Marty Cagan), lennyrachitsky.wiki, lennysvault.com (Claire Vo)
- htek.dev / the-decoder.com (Karpathy)
