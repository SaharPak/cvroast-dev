# CV Roast

> **Built with the Tech Immigrants community. By immigrants, for immigrants.**
> Free AI tool that scores your tech CV against how hiring actually works in 2026. Works for **all tech roles** — not just PMs.

**Try it now:** [cvroast.dev](https://cvroast.dev) — paste your CV, get scored in 15 seconds. No signup.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Domain: cvroast.dev](https://img.shields.io/badge/cvroast.dev-7C3AED?logo=safari&logoColor=white)](https://cvroast.dev)

## Why this exists

Three things happened in 2025-2026 that broke job applications for everyone:

1. **97.8% of Fortune 500 use ATS.** 75% of qualified applicants get rejected before a human ever sees their CV. AI screening is now standard.
2. **Generic enthusiasm is poison.** "Passionate about technology" is filtered out. So is "leveraged synergies" and "proven track record."
3. **The bar moved.** Shipped work with quantified impact beats certifications and theory by 100x. AI-skilled workers earn 56% more across ALL tech roles.

This tool was built by an immigrant tech community trying to land roles in a market where the old advice no longer works. We turned the research into rules. The rules became a tool. Now they're yours.

**Supported roles:** Software Engineers (Frontend/Backend/Full-stack/Mobile), Data Engineers, ML/AI Engineers, DevOps/SRE/Platform Engineers, UX/UI/Product Designers, Security Engineers, Engineering Managers, TPMs, QA/SDETs, Solutions Engineers, DevRel, and Product Managers.

## Two ways to use it

### Web app (most people)
Go to [cvroast.dev](https://cvroast.dev), paste your CV, get scored. One free roast per visitor per day. No signup, no API key, no install. Your CV is sent to Claude for scoring and immediately discarded.

### Open-source skill (developers, power users, privacy-strict)
Install this repo as a skill in Cursor, Claude Code, or OpenCode. Unlimited roasts. Your CV never leaves your machine. See [INSTALL.md](INSTALL.md).

## What it scores

Six dimensions with **role-adaptive weights** — the tool detects your role family and adjusts automatically:

| Dimension | Range | Key Insight |
|---|---|---|
| Shipped Evidence | 20-30% | What you built in production, not what you studied |
| Quantified Impact | 15-25% | Numbers in every bullet (scale, speed, cost, adoption) |
| Tech/Tool Visibility | 10-15% | Named tools matching your role, including AI tools |
| ATS Compatibility | 5-15% | Clean formatting that parses through AI screeners |
| Keyword Match | 10-15% | JD-specific or role-family keyword coverage |
| Public Proof Surface | 10-40% | GitHub, portfolio, blog, LinkedIn (40% for designers!) |

You get a score, the detected role family, top issues ranked by impact, and concrete before/after rewrites for your worst bullets.

It also handles cover letters using the **HCPA formula** (Hook, Connection, Proof, Ask).

## Quick example

**Before:**
> Results-oriented Senior Product Manager with 10+ years of experience driving cross-functional initiatives and delivering robust solutions in fast-paced environments. Passionate about leveraging cutting-edge AI to drive innovation.

**After (the tool rewrote it):**
> A product manager who shipped 10+ enterprise integrations adopted by 500+ B2B clients, then led a company-wide identity migration affecting 55,000+ user accounts across 10+ teams. Daily user of Cursor and Claude Code for product spec generation and prototyping.

The rewrite added: scope numbers, named tools, real outcomes, no buzzword soup.

## What's in this repo

| File | Purpose |
|---|---|
| [`index.html`](index.html) | The cvroast.dev landing page (Cloudflare Pages) |
| [`functions/api/roast.js`](functions/api/roast.js) | Cloudflare Pages Function — calls Claude API |
| [`SKILL.md`](SKILL.md) | The open-source skill the AI loads when you ask for a CV review |
| [`EVALUATION.md`](EVALUATION.md) | Detailed scoring rubrics for both CV and cover letter |
| [`RESEARCH.md`](RESEARCH.md) | The 2026 market research the rules are based on (with sources) |
| [`EXAMPLES.md`](EXAMPLES.md) | Concrete before/after examples |
| [`INSTALL.md`](INSTALL.md) | Install the skill in Cursor / Claude Code / OpenCode |

## Who built this and why

The Tech Immigrants community ( [Telegram](https://t.me/twitterimmigrant)) is 50,000+ tech professionals trying to land jobs internationally. CV feedback was the most-asked help in the community.

So we built a free, research-backed tool that gives consistent feedback at scale.

## Contributing

PRs welcome. The most useful contributions:

- **More before/after examples** — for any tech role (we have 25+ already, always want more)
- **Role-specific keyword lists** — help us refine what recruiters scan for per role
- **Translations** — the rules apply globally; the language barrier is real
- **Localized rules** — Finnish, German, Japanese, French job markets work differently
- **Bug reports** — when the tool misses something obvious, open an issue

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to add an example or rule.

## License

MIT. Use it, fork it, ship it. Just don't claim you built it from scratch — link back to this repo.

## Acknowledgments

Research synthesizes advice from: Andrej Karpathy, Marty Cagan, Lenny Rachitsky, Claire Vo, FAANG recruiters (Madison Vitug, Chris Allaire), and 50+ public sources cited in [RESEARCH.md](RESEARCH.md).
