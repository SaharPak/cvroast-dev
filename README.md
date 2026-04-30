# AI CV Roast

> **Built with the Tech Immigrants community. By immigrants, for immigrants.**
> A Claude Code / Cursor skill that evaluates your CV and cover letter against how AI hiring actually works in 2026.

**Home:** [cvroast.dev](https://cvroast.dev)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Skill: Claude Code](https://img.shields.io/badge/Skill-Claude%20Code%20%7C%20Cursor%20%7C%20OpenCode-7C3AED)](INSTALL.md)
[![Domain: cvroast.dev](https://img.shields.io/badge/cvroast.dev-7C3AED?logo=safari&logoColor=white)](https://cvroast.dev)

## Why this exists

Three things happened in 2025 that broke job applications for everyone:

1. **70% of companies now use AI to screen resumes.** 75% of qualified applicants get rejected before a human ever sees their CV.
2. **Generic AI claims now hurt instead of help.** "Passionate about AI" is filtered out. So is "leveraged synergies."
3. **The bar moved.** "I've used AI tools to ship something real" beats "I have an AI certification" by 100x.

This skill was built by an immigrant tech community trying to land roles in a market where the old advice no longer works. We turned the research into rules. The rules became a skill. The skill is now yours.

## What it does

When you ask Claude (via Cursor, Claude Code, or OpenCode) to evaluate your CV or cover letter, this skill activates and scores you against six dimensions backed by 2026 hiring research:

| Dimension | Weight |
|---|---|
| Shipped Evidence | 30% |
| Quantified Impact | 20% |
| AI Tooling Visibility | 15% |
| ATS Compatibility | 15% |
| Keyword Match | 10% |
| Public Proof Surface | 10% |

You get a score, the top issues ranked by impact, and concrete before/after rewrites for your worst bullets.

It also does cover letters using the **HCPA formula** (Hook, Connection, Proof, Ask) with a similar rubric.

## Quick example

**Before:**
> Results-oriented Senior Product Manager with 10+ years of experience driving cross-functional initiatives and delivering robust solutions in fast-paced environments. Passionate about leveraging cutting-edge AI to drive innovation.

**After (the skill rewrote it):**
> A product manager who shipped 10+ enterprise integrations adopted by 500+ B2B clients, then led a company-wide identity migration affecting 55,000+ user accounts across 10+ teams. Daily user of Cursor and Claude Code for product spec generation and prototyping.

The rewrite added: scope numbers, named tools, real outcomes, no buzzword soup.

## Install

See [INSTALL.md](INSTALL.md) for Cursor, Claude Code, and OpenCode setup. Takes about 2 minutes.

## What's inside

| File | Purpose |
|---|---|
| [SKILL.md](SKILL.md) | The main skill the AI loads when you ask for a CV review |
| [EVALUATION.md](EVALUATION.md) | Detailed scoring rubrics for both CV and cover letter |
| [RESEARCH.md](RESEARCH.md) | The 2026 market research the rules are based on (with sources) |
| [EXAMPLES.md](EXAMPLES.md) | Concrete before/after examples |

## Who built this and why

The Tech Immigrants community ([@saharlead](https://x.com/saharlead) on X, [@TechImmigrants](https://t.me/TechImmigrants) on Telegram) is 44,000+ tech professionals trying to land jobs internationally. CV feedback was the most-asked help in the community.

So we built a skill that gives consistent, research-backed feedback at scale — for free. No API key required. No data leaves your machine. Just install it in Claude Code or Cursor and ask for a roast.

## Contributing

PRs welcome. The most useful contributions:

- **More before/after examples** — especially for engineering, design, data science roles
- **Translations** — the rules apply globally; the language barrier is real
- **Localized rules** — Finnish, German, Japanese, French job markets work differently
- **Bug reports** — when the skill misses something obvious, open an issue

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to add an example or rule.

## License

MIT. Use it, fork it, ship it. Just don't claim you built it from scratch — link back to this repo.

## Acknowledgments

Research synthesizes advice from: Andrej Karpathy, Marty Cagan, Lenny Rachitsky, Claire Vo, FAANG recruiters (Madison Vitug, Chris Allaire), and 30+ public sources cited in [RESEARCH.md](RESEARCH.md).

The skill structure follows the Cursor / Claude Code skill format.
