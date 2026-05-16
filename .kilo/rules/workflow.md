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
