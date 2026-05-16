# SiteHeader

## Tier
Organism

## Description
Primary site header with brand, navigation, a status badge, and a mobile off-canvas drawer.

## Props
| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| `className` | `string` | ❌ | `''` | Optional extra class |

## Dependencies
- Button (`atoms`)
- Icon (`atoms`)
- Text (`atoms`)
- ThemeModeSwitch (`molecules`)

## Usage Example
```tsx
import { SiteHeader } from '@/components/organisms/SiteHeader';

<SiteHeader />
```

## Accessibility
- Uses a labeled `<nav>`.
- Mobile drawer exposes `aria-expanded`, `aria-controls`, and `Escape` close behavior.
- Focus returns to the drawer trigger when the drawer closes.
- Active route state is visible via `NavLink`.

## Styling
Co-located: `src/components/organisms/SiteHeader/styles.scss`
Mobile-first layout with off-canvas drawer and desktop nav fallback.

## Testing

Unit tests should live in `src/components/organisms/SiteHeader/SiteHeader.test.tsx`.
Verify drawer toggling, focus return, and theme switch integration.

## Change Log
| Date | Change | Commit |
|---|---|---|
| — | Initial implementation | — |
