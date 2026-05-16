# Component Registry

Master index of all UI components in the project, organized by Atomic Design tier.

## Tiers

| Tier | Directory | Description |
|---|---|---|
| [Atoms](./atoms/index.md) | `src/components/atoms/` | Fundamental building blocks |
| [Molecules](./molecules/index.md) | `src/components/molecules/` | Combinations of atoms |
| [Organisms](./organisms/index.md) | `src/components/organisms/` | Complex UI sections |
| [Templates](./templates/index.md) | `src/components/templates/` | Page-level layouts |
| [Pages](./pages/index.md) | `src/components/pages/` | Routable views |

## Quick Reference

| Component | Tier | Status |
|---|---|---|
| *(none yet)* | — | — |

## Rules

- Check this registry **before** creating any new component.
- Reuse existing components when possible.
- Register every new component with a `.md` spec file in its tier directory.
- Follow the template in `.kilo/rules/atomic-design.md` for spec files.
