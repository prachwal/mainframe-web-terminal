# Button

## Tier
Atom

## Description
Interactive element with three visual variants: primary (accent), secondary (subtle), outline (transparent).

## Props

| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| `children` | `ReactNode` | ✅ | — | Button label |
| `variant` | `'primary' \| 'secondary' \| 'outline'` | ❌ | `'primary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | ❌ | `'md'` | Button size |
| `onClick` | `() => void` | ❌ | — | Click handler |
| `type` | `'button' \| 'submit' \| 'reset'` | ❌ | `'button'` | HTML type |
| `disabled` | `boolean` | ❌ | `false` | Disabled state |
| `className` | `string` | ❌ | `''` | Extra CSS class |

## Dependencies
- **External**: React
- **Internal**: none

## Usage Example

```tsx
import { Button } from '@/components/atoms/Button';

<Button variant="primary" size="lg" onClick={() => console.log('clicked')}>
  Submit
</Button>
```

## Accessibility

- Native `<button>` element, keyboard-focusable.
- `focus-visible` outline in SCSS.
- Disabled state handled natively.
- Button foreground/background pairs must preserve WCAG AA contrast in both themes.
- Prefer explicit `aria-pressed` only for toggle semantics; do not fake inactive states with `disabled`.

## Styling

Co-located: `src/components/atoms/Button/styles.scss`
Uses design tokens from `src/styles/tokens/` via `@use`.

## Testing

Unit tests live in `src/components/atoms/Button/Button.test.tsx`.
Cover native attribute passthrough, disabled behavior, and click handling.

## Change Log

| Date | Change | Commit |
|---|---|---|
| — | Initial implementation | 0b9d504 |
