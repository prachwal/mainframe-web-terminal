# PageShell

## Tier
Template

## Description
Shared shell that composes `MainLayout` with the site header and footer.

## Props
| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| `children` | `ReactNode` | ✅ | — | Page content |
| `className` | `string` | ❌ | `''` | Optional extra class |

## Dependencies
- MainLayout (`templates`)
- SiteHeader (`organisms`)
- SiteFooter (`organisms`)

## Usage Example
```tsx
import { PageShell } from '@/components/templates/PageShell';

<PageShell>
  <section>Content</section>
</PageShell>
```

## Accessibility
- Keeps header, main, and footer landmarks consistent across pages.

## Styling
Co-located: `src/components/templates/PageShell/styles.scss`

## Change Log
| Date | Change | Commit |
|---|---|---|
| — | Initial implementation | — |
