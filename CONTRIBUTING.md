# Contributing

Thanks for considering a contribution. The most useful contributions, in order of impact:

## 1. Add a before/after example

If the skill missed something obvious on your CV, send us the example (anonymized) so we can teach it to handle that case.

Open a PR adding to `EXAMPLES.md` in this format:

```markdown
### Example N: [Short title — what category]

**Before (X.X/5)**
> [Original bullet/sentence/section]

**After (X.X/5)**
> [Improved version]

**Why it works:**
- [Reason 1]
- [Reason 2]
```

**Anonymize.** No real names, no real company names (use "B2B SaaS" or "Acme Corp"), no real metrics that could trace back to one person.

## 2. Add a localized rule

Job markets work differently. We want help on:

- **Finland:** photo norms, education weighting, Finnish keyword conventions
- **Germany:** Anschreiben format, Lebenslauf style, Zeugnis culture
- **Japan:** rirekisho format, photo requirements, family/age fields
- **France:** CV à la française conventions, lettre de motivation rules
- **Brazil/Latin America:** language switching expectations, RG/CPF privacy
- **MENA region:** language expectations, gulf-specific norms

Open a PR adding `RULES_<COUNTRY>.md` (e.g., `RULES_FINLAND.md`) and link it from `SKILL.md` under "Companion Files."

## 3. Add a role-specific archetype

The skill currently lists 7 archetypes (AI PM, AI Engineer, etc.). If you work in an underserved area (Data Engineering, DevRel, Solutions Architect, AI Designer, etc.), open a PR adding the archetype to `SKILL.md` Step 2 and writing 2-3 example bullets in `EXAMPLES.md`.

## 4. Bug reports

If the skill produces obviously wrong feedback, open an issue with:

- The input CV section (anonymized)
- The skill's output
- What it should have said
- Why

## What NOT to contribute

- Personal CVs as PRs (use the skill privately, share only if you want to add a generic example)
- Examples that name specific real people or specific real metrics
- Rules that benefit one country at the expense of universality (use a localized RULES_<COUNTRY>.md file)
- LLM-generated examples without a human review (we want craft, not slop)

## Review timeline

This is a community project. Expect 1-2 weeks for review. PRs that follow the format above and stay anonymized get merged faster.

## Code of conduct

Be kind. Most contributors here are immigrants navigating job markets in languages that aren't their first. Lead with patience.
