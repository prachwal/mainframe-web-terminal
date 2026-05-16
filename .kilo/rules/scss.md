# SCSS Architecture Rule

## Scope
All styling work — new features, refactoring, bug fixes touching CSS — MUST follow this SCSS architecture.

## Dependencies

Install `sass` as a dev dependency (Vite supports Sass out of the box once installed):

```bash
pnpm add -D sass
```

## Architecture Overview

Use a **hybrid approach**: global design system + co-located component styles.

```text
src/
├── styles/
│   ├── main.scss              # Entry point, imported in App.tsx
│   ├── tokens/
│   │   ├── _index.scss        # Barrel: re-exports all tokens
│   │   ├── _colors.scss       # Color palette, semantic colors
│   │   ├── _spacing.scss      # Spacing scale, border-radius
│   │   ├── _typography.scss   # Font stacks, sizes, weights, line-heights
│   │   ├── _breakpoints.scss  # Responsive breakpoints
│   │   └── _shadows.scss      # Elevation / box-shadow tokens
│   ├── mixins/
│   │   ├── _index.scss
│   │   ├── _media.scss        # breakpoint mixins
│   │   ├── _flex.scss         # flex/grid helpers
│   │   └── _visually-hidden.scss
│   ├── functions/
│   │   ├── _index.scss
│   │   └── _rem.scss          # px-to-rem converter
│   ├── _reset.scss            # CSS reset / normalize (use modern-normalize approach)
│   ├── _base.scss             # Base HTML element styles (body, headings, links)
│   └── _utilities.scss        # Utility classes (margin, padding, text-align)
└── components/
    └── atoms/
        └── Button/
            ├── index.tsx
            └── styles.scss    # Co-located component styles
```

## File Naming Convention

| File Type | Naming | Example |
|---|---|---|
| Sass partial | `_name.scss` | `_colors.scss` |
| Token file | `_name.scss` inside `tokens/` | `_spacing.scss` |
| Component style | `styles.scss` or `styles.module.scss` | `Button/styles.scss` |
| Entry / barrel | `index.scss` or `main.scss` | `main.scss` |

## Import Rules

### Sass Built-in Modules

Do **not** use deprecated global built-in functions like `map-get`, `map-has-key`, or `map-keys`.
Always import the relevant Sass module explicitly and use namespaced calls:

```scss
@use 'sass:map';

@if map.has-key($breakpoints, md) {
  width: map.get($breakpoints, md);
}
```

This rule applies to all component styles, mixins, and global style utilities.

### Global Entry (`src/styles/main.scss`)

```scss
@use 'tokens' as *;      // design tokens (variables)
@use 'mixins' as *;        // global mixins
@use 'functions' as *;     // global functions
@use 'reset';              // CSS reset
@use 'base';               // base element styles
@use 'utilities';          // utility classes
```

Import **once** in `App.tsx`:

```tsx
import './styles/main.scss';
```

### Component Styles

Component styles **SHOULD** use `@use` to import tokens/mixins (not `@import`):

```scss
// src/components/atoms/Button/styles.scss
@use '../../../styles/tokens' as tokens;
@use '../../../styles/mixins' as mixins;

.button {
  padding: tokens.$spacing-sm tokens.$spacing-md;
  border-radius: tokens.$radius-md;
  font-weight: tokens.$font-weight-semibold;

  @include mixins.media(md) {
    padding: tokens.$spacing-md tokens.$spacing-lg;
  }
}
```

Prefer **plain SCSS** for simple components; use **CSS Modules** (`styles.module.scss`) when:
- Class names must be scoped to avoid collisions.
- Component is heavily reused with unpredictable parent styles.

## Design Tokens

All visual constants must live in `src/styles/tokens/`. **Never** hard-code raw values in component styles.

Example `tokens/_colors.scss`:

```scss
// Primitive palette
$color-blue-500: #3b82f6;
$color-red-500: #ef4444;

// Semantic tokens
$color-primary: $color-blue-500;
$color-danger: $color-red-500;
$color-text-primary: #0f172a;
$color-surface: #ffffff;
```

## Color Contract

Color usage MUST follow a clear semantic hierarchy:

- Use semantic document tokens for general text and surfaces:
  - `var(--color-text)` for body text
  - `var(--color-text-heading)` for stronger labels and headings
  - `var(--color-bg)` for page surfaces
  - `var(--color-border)` for neutral separators
- Use component-scoped CSS custom properties only when a component needs a distinct surface.
  - Component-scoped variables MUST be prefixed with the component or feature name, such as
    `--social-links-text` or `--hero-chip-bg`.
  - Shared components must not depend directly on another feature's tokens, such as `--hero-*`.
- For any component shown in both light and dark themes, verify the text color against its final
  background in both modes.
- If a component uses decorative or compact control surfaces, expose the color contract at the
  component root and override it from the host container instead of hard-coding per-child colors.

Example:

```scss
.social-links {
  --social-links-text: var(--color-text-heading);
  --social-links-bg: var(--color-social-bg);
}

.hero-banner {
  --social-links-text: var(--hero-chip-text);
  --social-links-bg: var(--hero-chip-bg);
}
```

## Naming Conventions

### Variables
- `$token-category-variant`: `$spacing-md`, `$color-primary`, `$font-size-lg`
- Use kebab-case.

### Classes (BEM Light)
Given component `Button`:

```scss
.button { }                    // block
.button--primary { }           // modifier
.button--small { }
.button__icon { }              // element (rare; prefer molecules for composition)
```

### Utility Classes
Prefix utilities with `u-`:

```scss
.u-mb-md { margin-bottom: $spacing-md; }
.u-text-center { text-align: center; }
.u-visually-hidden { @include visually-hidden; }
```

## Responsive Breakpoints

Define in `tokens/_breakpoints.scss`:

```scss
$breakpoint-sm: 640px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1280px;
```

Use via mixin in `mixins/_media.scss`:

```scss
@mixin media($size) {
  @media (min-width: map-get($breakpoints, $size)) {
    @content;
  }
}
```

## Interactive Surface Density

Controls that act like compact chips, icon links, or grouped action buttons MUST scale
mobile-first instead of relying on one-off padding tweaks.

- Default to a smaller touch target on mobile when the control is part of a dense list or
  social/action cluster.
- Increase padding, min-height, and spacing at breakpoint boundaries with `@include media(...)`.
- Prefer shared mixins or CSS custom properties for repeated control surfaces over copy-pasting
  individual `padding` and `min-height` values into each component.
- Keep the accessible hit area large enough for pointer input even when the visual treatment is
  compact.

Recommended patterns:

```scss
@use '../../../styles/mixins' as mixins;

.chip-link {
  @include mixins.responsive-control-surface(8px, 8px, 12px, 12px, 40px, 48px);
}
```

## Atomic Design Mapping

| Component Tier | Style Location | Token Usage |
|---|---|---|
| Atom | `src/components/atoms/<Name>/styles.scss` | Direct token values |
| Molecule | `src/components/molecules/<Name>/styles.scss` | Compose atom classes; add layout tokens |
| Organism | `src/components/organisms/<Name>/styles.scss` | Layout + spacing; compose molecules |
| Template | `src/components/templates/<Name>/styles.scss` | Page wireframe grid; skeleton placeholders |
| Page | No own styles (or minimal) | Consumes templates |

## Co-location Rule

Every component folder MUST contain its styles next to the TSX file:

```
Button/
  index.tsx
  styles.scss      # or styles.module.scss
  test.tsx
```

Do **not** create a centralized `src/styles/components/` directory — that breaks Atomic Design encapsulation.

## Enforcement

- `reviewer` subagent MUST check that no raw values (hex colors, px spacing, magic numbers) appear in component styles — only token variables.
- `reviewer` subagent MUST verify that `@use` is used instead of deprecated `@import`.
- `reviewer` subagent MUST verify co-location: component TSX and its SCSS must sit in the same directory.
- Missing token usage or wrong import style is a **blocking** review comment.
