# AGENTS.md

To be created by Kilo Agent Manager.

## Project Setup

- **Package Manager**: pnpm
- **Build Tool**: Vite
- **Language**: TypeScript + React 19
- **Design System**: Atomic Design Methodology

## Project Structure

```tree
mainframe-web-terminal/
├── .kilo/
│   ├── agent/            # Subagent definitions (orchestrator, ask, plan, code, reviewer, debug)
│   ├── commands/         # Custom slash commands
│   ├── rules/            # Workflow and coding rules (*.md auto-loaded into prompts)
│   └── components/       # Component registry (index.md + per-component docs)
├── src/
│   ├── components/
│   │   ├── atoms/        # Fundamental building blocks (Button, Input, Icon, Badge, Spinner, Label)
│   │   ├── molecules/    # Combinations of atoms (SearchBar, FormField, CardHeader, NavItem, Breadcrumb)
│   │   ├── organisms/    # Complex UI sections (Header, Sidebar, Terminal, DataTable, LoginForm, Footer)
│   │   ├── templates/    # Page-level layouts (MainLayout, DashboardLayout, AuthLayout, ErrorLayout)
│   │   └── pages/        # Routable views (HomePage, TerminalPage, SettingsPage, LoginPage, NotFoundPage)
│   ├── hooks/            # Reusable React hooks (useAuth, useTerminal, useTheme, useDebounce)
│   ├── utils/            # Pure helper functions (formatDate, classNames, validators)
│   ├── types/            # Global TypeScript interfaces and types
│   ├── styles/           # Global SCSS design system (tokens, mixins, reset, base, utilities)
│   ├── services/         # API clients, WebSocket handlers
│   ├── store/            # Global state (Zustand / Redux / Context)
│   └── App.tsx           # Root component with routing
├── public/               # Static assets
├── dist/                 # Build output
└── [config files]        # package.json, vite.config.ts, tsconfig.*, eslint, prettier, etc.
```

## Atomic Design Component Hierarchy

When implementing any UI feature, follow the **bottom-up** order:

1. **Atoms** — smallest, reusable, no dependencies on other project components.
2. **Molecules** — composed of atoms; self-contained functional units.
3. **Organisms** — composed of molecules and atoms; distinct page sections.
4. **Templates** — page skeletons; wireframe layouts with placeholder content.
5. **Pages** — concrete instances of templates populated with real data and routes.

### Dependency Rules

- **Atom** → may use only built-ins (`div`, `span`) and external libraries (Radix, etc.). Never depends on another project component.
- **Molecule** → may use **atoms**.
- **Organism** → may use **molecules** and **atoms**.
- **Template** → may use **organisms**, **molecules**, and **atoms**.
- **Page** → may use **templates**, **organisms**, **molecules**, and **atoms**.

### Component Registry

Before creating any component, check `.kilo/components/index.md`.
If a component already exists, reuse it. If it does not exist, create it.

Registry format (per component):
- `.kilo/components/index.md` — master list of all components by tier.
- `.kilo/components/atoms/Button.md` — detailed spec: props, behavior, dependencies, usage examples, change history.

## Development Workflow

1. **Install dependencies**: `pnpm install`
2. **Run dev server**: `pnpm dev`
3. **Build**: `pnpm build`
4. **Test**: `pnpm test`
5. **Preview**: `pnpm preview`
6. **Lint**: `pnpm lint`
7. **Format**: `pnpm format`

### When Tests Are Required

- Any change to `src/components/**` that affects rendering, props, semantics, or interactivity.
- Any change to `src/store/**`, `src/theme.ts`, or other state/persistence logic.
- Any bug fix where a regression test can prevent the same issue from returning.
- Any new helper or utility with branching logic.
- Any change that affects theme, layout, or color surfaces must also satisfy the theme contract in `.kilo/rules/theme-contract.md`.

### Test Setup

- Vitest and React Testing Library are the default unit test stack.
- Shared test bootstrap lives in `src/test/setup.ts`.
- Prefer co-located tests: `ComponentName.test.tsx` next to the component or `module.test.ts` next to the module.

## Git & Commit Conventions

- Use [Conventional Commits](https://www.conventionalcommits.org/): `type(scope): subject`
- Valid types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
- Commitlint validates commits before allowing them
- **Scope** should reflect the Atomic Design tier when touching components: `feat(atoms): add Spinner`, `fix(organisms): Terminal scrollback`

## Agent Roles

- **orchestrator**: Lead agent. Manages the lifecycle and delegates to subagents.
- **ask**: Clarifies requirements.
- **plan**: Creates strategic and detailed plans.
- **code**: Implements changes (React 19, TS).
- **reviewer**: Conducts deep logic and security reviews.
- **debug**: Specialized in fixing issues.

## Development Lifecycle

1. `ask` -> Clarify requirements.
2. `plan` -> Create general roadmap (phases).
3. `plan` -> Detailed plan for current phase.
4. `git checkout -b` -> Work on a feature branch.
5. `code` -> Implementation + `pnpm lint`.
6. `reviewer` -> Review.
7. `git merge` -> Commit and merge to main.

## Code Style

- **ESLint**: TypeScript + React Hooks + React Refresh
- **Prettier**: 2-space indent, single quotes, semicolons, 100 char width
- **TypeScript**: Strict mode enabled
- **Component files**: Co-locate styles, tests, and stories next to the component (`ComponentName/index.tsx`, `ComponentName/styles.scss`, `ComponentName/test.tsx`).

## Styling (SCSS)

- Global design system lives in `src/styles/` (tokens, mixins, reset, base, utilities).
- Component styles are co-located: `src/components/{tier}/ComponentName/styles.scss`.
- Use `@use` for imports (never `@import`).
- Always reference design tokens; never hard-code raw values.
- Prefer plain SCSS; use CSS Modules only when scoping is required.
- Follow the full architecture in `.kilo/rules/scss.md`.
