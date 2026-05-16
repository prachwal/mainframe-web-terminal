# Testing Rule

## Scope
All behavioral changes should be covered by focused unit tests when they touch UI atoms, utility logic, or stateful behavior.

## Test Stack
- **Runner**: Vitest
- **DOM environment**: jsdom
- **UI assertions**: React Testing Library
- **A11y matchers**: `@testing-library/jest-dom`

## File Layout
- Co-locate component tests beside the component: `src/components/<tier>/<Component>/<Component>.test.tsx`
- Keep pure logic tests next to the module: `src/<area>/<module>.test.ts`
- Shared test bootstrap lives in `src/test/setup.ts`

## What to Test
- Semantic rendering and ARIA exposure for atoms
- Event handling and native attribute passthrough for interactive controls
- Pure helper functions with branching logic
- State reducers, persistence, and document side effects
- Decorative icons and non-interactive visuals must remain hidden from assistive tech

## Minimum Coverage
- New or changed atoms need at least one behavior-focused test
- New state mutations need a reducer or side-effect test
- New utility branches need explicit branch coverage
- Fixes should include a regression test that would fail before the change

## Conventions
- Import `describe`, `it`, `expect`, and `vi` from `vitest`
- Prefer user-visible assertions over implementation details
- Prefer explicit setup over hidden global state
- Reset shared browser state between tests

## Commands
- `pnpm test`
- `pnpm test -- --run`
- `pnpm build`
