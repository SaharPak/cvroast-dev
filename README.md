# AI CV Roast

> **Built with the Tech Immigrants community. By immigrants, for immigrants.**
> Free AI tool that scores your CV against how AI hiring actually works in 2026.

**Try it now:** [cvroast.dev](https://cvroast.dev) — paste your CV, get scored in 15 seconds. No signup.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Domain: cvroast.dev](https://img.shields.io/badge/cvroast.dev-7C3AED?logo=safari&logoColor=white)](https://cvroast.dev)

## Why this exists

Three things happened in 2025 that broke job applications for everyone:

1. **70% of companies now use AI to screen resumes.** 75% of qualified applicants get rejected before a human ever sees their CV.
2. **Generic AI claims now hurt instead of help.** "Passionate about AI" is filtered out. So is "leveraged synergies."
3. **The bar moved.** "I've used AI tools to ship something real" beats "I have an AI certification" by 100x.

This tool was built by an immigrant tech community trying to land roles in a market where the old advice no longer works. We turned the research into rules. The rules became a tool. Now they're yours.

## Two ways to use it

### Web app (most people)
Go to [cvroast.dev](https://cvroast.dev), paste your CV, get scored. One free roast per visitor per day. No signup, no API key, no install. Your CV is sent to Claude for scoring and immediately discarded.

### Open-source skill (developers, power users, privacy-strict)
Install this repo as a skill in Cursor, Claude Code, or OpenCode. Unlimited roasts. Your CV never leaves your machine. See [INSTALL.md](INSTALL.md).

## What it scores

Six dimensions, weighted by what AI hiring managers actually care about in 2026:

| Dimension | Weight |
|---|---|
| Shipped Evidence | 30% |
| Quantified Impact | 20% |
| AI Tooling Visibility | 15% |
| ATS Compatibility | 15% |
| Keyword Match | 10% |
| Public Proof Surface | 10% |

You get a score, the top issues ranked by impact, and concrete before/after rewrites for your worst bullets.

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

The Tech Immigrants community ([@saharlead](https://x.com/saharlead) on X, [Telegram](https://t.me/twitterimmigrant)) is 50,000+ tech professionals trying to land jobs internationally. CV feedback was the most-asked help in the community.

So we built a free, research-backed tool that gives consistent feedback at scale.

## Contributing

PRs welcome. The most useful contributions:

- **More before/after examples** — especially for engineering, design, data science roles
- **Translations** — the rules apply globally; the language barrier is real
- **Localized rules** — Finnish, German, Japanese, French job markets work differently
- **Bug reports** — when the tool misses something obvious, open an issue

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to add an example or rule.

## License

MIT. Use it, fork it, ship it. Just don't claim you built it from scratch — link back to this repo.

## Acknowledgments

Research synthesizes advice from: Andrej Karpathy, Marty Cagan, Lenny Rachitsky, Claire Vo, FAANG recruiters (Madison Vitug, Chris Allaire), and 30+ public sources cited in [RESEARCH.md](RESEARCH.md).
