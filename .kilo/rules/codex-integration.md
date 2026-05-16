# Codex Integration Rule

Codex project configuration lives in `.codex/config.toml`.

When Codex is used in this repository:

- Treat `.kilo/kilo.jsonc` as the Kilo Agent Manager source of truth.
- Load project behavior from `AGENTS.md` and `.kilo/rules/*.md`.
- Check `.kilo/components/index.md` before creating or changing UI components.
- Keep Codex approval behavior aligned with the command permission intent in `.kilo/kilo.jsonc`.
- Do not duplicate unsupported Kilo config keys into `.codex/config.toml`; use Codex-supported fields and `developer_instructions` instead.
