# Atomic Design Rule

## Scope
All UI work — new features, refactoring, bug fixes touching components — MUST follow the Atomic Design hierarchy and Component Registry workflow defined here.

## Hierarchy (Bottom-Up)

Implement and review components in this strict order:

1. **Atoms** — foundational, single-responsibility, zero internal component dependencies.
2. **Molecules** — composed exclusively of atoms.
3. **Organisms** — composed of molecules and/or atoms.
4. **Templates** — page wireframes composed of organisms.
5. **Pages** — routable views that instantiate templates with real data.

### Allowed Imports Per Tier

| Tier | Can import from |
|---|---|
| Atom | External libs, React built-ins, hooks, utils, types |
| Molecule | **Atoms**, external libs, hooks, utils, types |
| Organism | **Molecules**, **Atoms**, external libs, hooks, utils, types |
| Template | **Organisms**, **Molecules**, **Atoms**, external libs, hooks, utils, types |
| Page | **Templates**, **Organisms**, **Molecules**, **Atoms**, external libs, hooks, utils, types, store, services |

**Forbidden**: Any cross-tier import upwards (e.g., Atom importing Molecule) or circular dependencies.

## Component Registry Workflow

Before writing a single component file, the `code` subagent MUST:

1. **Check** `.kilo/components/index.md` for existing components.
2. **Decide**:
   - **Reuse** if the component (or a close variant) already exists.
   - **Create** if genuinely new.
3. **Document** in the registry BEFORE or WITH the code change.

### Registry Structure

```
.kilo/components/
├── index.md                 # Master index: list of all tiers and component names
├── atoms/
│   ├── index.md             # List of all atoms
│   └── Button.md            # Full spec for Button atom
├── molecules/
│   ├── index.md
│   └── SearchBar.md
├── organisms/
│   ├── index.md
│   └── Terminal.md
├── templates/
│   ├── index.md
│   └── MainLayout.md
└── pages/
    ├── index.md
    └── TerminalPage.md
```

### Component Spec File Template (`.md`)

Every `.md` in the registry MUST contain:

```markdown
# <ComponentName>

## Tier
Atom / Molecule / Organism / Template / Page

## Description
One-sentence purpose.

## Props
| Prop | Type | Required | Default | Description |
|---|---|---|---|---|

## Dependencies
- Internal: `<List of project components it uses>`
- External: `<List of external libraries>`

## Usage Example
```tsx
// Minimal, copy-pasteable example
```

## Accessibility
- Keyboard navigation
- ARIA roles / labels
- Focus management

## Styling
- CSS modules / Tailwind / styled-components approach
- Theme tokens used

## Testing
- Unit tests location
- Key user flows to verify

## Change Log
| Date | Change | Commit |
|---|---|---|
```

## Enforcement

- `reviewer` subagent MUST verify that new components are registered.
- `reviewer` subagent MUST verify import directions (no upward imports).
- `reviewer` subagent MUST verify that atoms remain dependency-free within the project.
- Missing registry documentation is a **blocking** review comment.

## Exceptions

Emergency hotfixes may skip registry updates if they touch a single line and do not introduce new components. The PR description MUST then contain a TODO to update the registry in a follow-up.
