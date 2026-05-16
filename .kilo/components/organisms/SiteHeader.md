# SiteHeader

## Tier
Organism

## Description
Primary site header with brand, navigation, and a status badge.

## Props
| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| `className` | `string` | ❌ | `''` | Optional extra class |

## Dependencies
- Button (`atoms`)
- Text (`atoms`)

## Usage Example
```tsx
import { SiteHeader } from '@/components/organisms/SiteHeader';

<SiteHeader />
```

## Accessibility
- Uses a labeled `<nav>`.
- Active route state is visible via `NavLink`.

## Styling
Co-located: `src/components/organisms/SiteHeader/styles.scss`

## Change Log
| Date | Change | Commit |
|---|---|---|
| — | Initial implementation | — |
