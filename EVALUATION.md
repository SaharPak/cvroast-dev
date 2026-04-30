# CV & Cover Letter Evaluation Rubric

Use this rubric for any full evaluation of a CV or cover letter. Follow it as a checklist; produce a score per dimension and a global score.

---

## CV Rubric (Full Detail)

### 1. Shipped Evidence (30%)

| Score | What it looks like |
|---|---|
| 5 | Multiple production-shipped projects with named users/customers, real outcomes, and AI tools explicitly named (e.g., "Built a RAG agent in Cursor + LangChain serving 500+ users daily"). |
| 4 | At least one major shipped project with quantified scope; one or more side projects also shipped to real users. |
| 3 | Some shipped work, but unclear whether the candidate owned it or just contributed. |
| 2 | Mostly tutorials, courses, certifications. Some demo projects but no real users. |
| 1 | No evidence of shipping; only theory, certifications, or "interested in AI." |

**Red flag:** "Familiar with..." / "Knowledge of..." with no demonstrated build.

### 2. Quantified Impact (20%)

| Score | What it looks like |
|---|---|
| 5 | Every bullet has at least one number — scope, speed, adoption, savings, or volume. |
| 4 | 70%+ of bullets quantified; the rest are clearly descriptive context. |
| 3 | Half the bullets have numbers; the rest are vague. |
| 2 | Few numbers; mostly descriptive language ("worked on," "responsible for"). |
| 1 | Almost no numbers anywhere. |

**Quantification categories** (use these when coaching a candidate):
- Scope (users, customers, accounts, teams)
- Speed (time to ship, cycle compression, time saved)
- Process (adoption rate, refinement %, planning lead time)
- Adoption (DAU/MAU lift, integration count, feature usage)
- Volume (sessions, requests, transactions, content shipped)

### 3. AI Tooling Visibility (15%)

| Score | What it looks like |
|---|---|
| 5 | Has a dedicated AI/Tools section AND specific tool names appear inside experience bullets ("Built X using Cursor + Claude Code"). |
| 4 | AI tools named in either skills or experience but not both. |
| 3 | AI tools mentioned generically ("LLMs," "AI assistants"). |
| 2 | "Familiar with AI tools" or vague mention. |
| 1 | No AI tooling visible despite targeting AI roles. |

**Specific tools to look for:**
- Coding: Cursor, Claude Code, GitHub Copilot, Continue, Aider
- Agentic: n8n, LangChain, LangGraph, CrewAI, AutoGen
- LLMs: Claude, GPT-4/5, Gemini, Llama, Mistral, Sonnet, Opus
- Eval: ragas, DeepEval, LangSmith, Braintrust
- Vector DBs: Pinecone, Weaviate, pgvector, Qdrant, Chroma
- Cloud AI: Bedrock, Azure AI Foundry, Vertex AI

### 4. ATS Compatibility (15%)

Run this check explicitly:

| Check | Pass condition |
|---|---|
| Single column? | Yes |
| Tables in experience section? | No |
| Standard headings? (Experience, Skills, Education, Projects) | Yes |
| Date format consistent? | "Jan 2022 – Present" (or similar, applied uniformly) |
| Special characters? | No smart quotes, em-dashes converted, ASCII safe |
| Image-based PDF? | No (text must be selectable) |
| Header/footer with key info? | Headers/footers risk being skipped by some ATS — keep contact info in body |
| Contact info parseable? | Email, phone, LinkedIn URL on separate lines, plain text |

Score = number of passes / total checks × 5.

### 5. Keyword Match to JD (10%)

When a JD is provided:
1. Extract 15-20 keywords from the JD (skills, tools, frameworks, soft skills).
2. Mark which appear in the CV (count exact matches).
3. Score = (matches / target) × 5, where target = 12 matches for a senior role.

When no JD is provided, score against generic AI PM/Engineer keyword set.

### 6. Public Proof Surface (10%)

| Score | What it looks like |
|---|---|
| 5 | Active GitHub with pinned AI projects, recent Medium/blog posts, polished LinkedIn, X presence with AI conversations. |
| 4 | Two of the four channels active with quality content. |
| 3 | LinkedIn polished but no GitHub/blog presence. |
| 2 | Stale or minimal public footprint. |
| 1 | No public proof. |

---

## Cover Letter Rubric

### 1. Hook Quality (25%)

| Score | What it looks like |
|---|---|
| 5 | Opens with something specific the company recently did, said, or shipped. Could only have been written for THIS company. |
| 4 | Opens with a specific point about the role/team. |
| 3 | Opens with a specific point about the candidate's background tied to the role. |
| 2 | Generic but not painfully cliché. |
| 1 | "I am writing to express my interest..." or similar. |

### 2. Connection (20%)

| Score | What it looks like |
|---|---|
| 5 | Bridges the company's specific need to one named, quantified proof point from the candidate's experience. |
| 4 | Connects company need to candidate experience but the proof point is vague. |
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
| 1 | Pure AI-generated cliché. |

### 5. Ask (10%)

| Score | What it looks like |
|---|---|
| 5 | Specific ask: "I'd value 30 minutes to discuss [specific challenge]." Includes a way to follow up. |
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
## CV Evaluation: [Candidate / Role]

**Global Score: X.X/5**

| Dimension | Score | Notes |
|---|---|---|
| Shipped Evidence | X/5 | ... |
| Quantified Impact | X/5 | ... |
| AI Tooling Visibility | X/5 | ... |
| ATS Compatibility | X/5 | ... |
| Keyword Match | X/5 | ... |
| Public Proof Surface | X/5 | ... |

### What Works (Top 3)
1. ...
2. ...
3. ...

### What Needs Fixing (Ranked by Impact)
1. **[Issue]** — Why it matters → How to fix
2. ...
3. ...

### Top 3 Rewrites (Before → After)
1. **Before:** [exact text from CV]
   **After:** [rewritten version with quantification + tools]
2. ...
3. ...

### Recommendation
[Apply / Polish first / Major rewrite / Don't apply yet]
```
