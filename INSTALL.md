# Installation

This is a portable AI skill. It works in three environments.

**Project home:** [cvroast.dev](https://cvroast.dev)
**Source:** [github.com/saharlead/ai-cv-roast](https://github.com/saharlead/ai-cv-roast)

## Cursor

1. Clone this repo into your Cursor skills folder:

   ```bash
   # For project-level (this repo only):
   mkdir -p .cursor/skills && cd .cursor/skills
   git clone https://github.com/saharlead/ai-cv-roast.git

   # For personal-level (every project you open):
   mkdir -p ~/.cursor/skills && cd ~/.cursor/skills
   git clone https://github.com/saharlead/ai-cv-roast.git
   ```

2. Restart Cursor. The skill will auto-load when you ask the agent to evaluate a CV or cover letter.

3. Try it: open a chat with the agent, paste your CV, and say *"roast this CV using the ai-cv-roast skill."*

## Claude Code

1. Clone into the Claude Code skills folder:

   ```bash
   # For project-level:
   mkdir -p .claude/skills && cd .claude/skills
   git clone https://github.com/saharlead/ai-cv-roast.git

   # For personal-level:
   mkdir -p ~/.claude/skills && cd ~/.claude/skills
   git clone https://github.com/saharlead/ai-cv-roast.git
   ```

2. Run `claude` in any project. The skill activates automatically when you ask for a CV review.

## OpenCode

OpenCode supports the same skill format. Place the skill in your OpenCode skills directory (consult OpenCode docs for the exact path on your OS) and the agent will pick it up.

## Verify it's working

After install, ask your AI agent:

> "What does the ai-cv-roast skill do?"

If installed correctly, the agent will summarize the skill (six scoring dimensions, the HCPA cover letter formula, the 2026 market context).

## Use it without install (one-shot)

If you don't want to install anything, just paste this into any Claude conversation:

> "Read the SKILL.md, EVALUATION.md, and EXAMPLES.md from https://github.com/saharlead/ai-cv-roast and use them as your rubric to evaluate the CV I'm about to paste."

Then paste your CV. (This works because Claude can fetch public GitHub files.)

## Privacy

This skill runs entirely client-side. Your CV never leaves your machine — it goes from your editor to your Claude/Cursor session and back. No telemetry, no analytics, no data collection by this repo.

If you use the optional web app (coming soon), you can either bring your own API key or use the rate-limited free tier.
