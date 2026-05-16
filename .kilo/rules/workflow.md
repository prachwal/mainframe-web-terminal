# Development Workflow Rule

All feature requests and complex tasks MUST follow this lifecycle:

1.  **Requirement Analysis (`ask`)**:
    *   Subagent: `ask`
    *   Goal: Eliminate ambiguity.
2.  **General Planning (`plan`)**:
    *   Subagent: `plan`
    *   Goal: Split work into logical phases (e.g., Phase 1: Setup, Phase 2: Core Logic, Phase 3: UI).
3.  **Detailed Phase Execution** (Repeat for each phase):
    *   **Phase Planning**: Detailed steps for the specific phase.
    *   **Branching**: `git checkout -b feature/phase-name`.
    *   **Implementation (`code`)**: Write code following project standards (React 19, TS).
    *   **Testing**: Run `pnpm lint`, `pnpm test`, and any relevant targeted tests.
    *   **Review (`reviewer`)**: High-reasoning review of the changes.
    *   **Merge**: Commit changes and merge back to the main branch.

Every step must be tracked in the session's Todo list.

## Netlify Deployment Flow

- Treat `deployment` as the publishing branch for Netlify.
- Do not publish from `main` unless the user explicitly overrides that decision.
- Use Netlify CLI to create or publish the `mainframe-web-terminal` site from the current branch.
- If the Netlify account contains stale projects for this repository, remove them before creating the new site.
- Document the branch choice and publish path in `AGENTS.md` and the relevant Kilo rule files.

## Public Runtime Config

- Prefer a single typed runtime config object for public URLs that are needed in more than one place.
- Keep public environment values in `.env` and `.env.example` so the repo has both a working local
  default and a template for new checkouts.
- Do not scatter multiple `VITE_*` reads across components when one typed object can carry the same data.
- If a footer, header, or shared molecule needs a public URL, read it from the runtime config helper.
