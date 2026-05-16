# Button

## Tier
Atom

## Description
Interactive element with three visual variants: primary (accent), secondary (subtle), ghost (transparent).

## Props
| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| `children` | `ReactNode` | ✅ | — | Button label |
| `variant` | `'primary' \| 'secondary' \| 'ghost'` | ❌ | `'primary'` | Visual style |
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

<Button variant="primary" onClick={() => console.log('clicked')}>
  Submit
</Button>
```

## Accessibility
- Native `<button>` element, keyboard-focusable.
- `focus-visible` outline in SCSS.
- Disabled state handled natively.

## Styling
Co-located: `src/components/atoms/Button/styles.scss`
Uses design tokens from `src/styles/tokens/` via `@use`.

## Testing
Add tests as needed in `src/components/atoms/Button/Button.test.tsx`.

## Change Log
| Date | Change | Commit |
|---|---|---|
| — | Initial implementation | 0b9d504 |
