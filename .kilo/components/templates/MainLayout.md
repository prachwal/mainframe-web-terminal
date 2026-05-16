# MainLayout

## Tier
Template

## Description
App shell wrapper: renders the global `HeroBanner` and a flexible main content area.

## Props
| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| `children` | `ReactNode` | ✅ | — | Page content inside `<main>` |
| `heroTitle` | `string` | ✅ | — | Title forwarded to HeroBanner |
| `heroDescription` | `string` | ✅ | — | Description forwarded to HeroBanner |
| `heroButtonLabel` | `string` | ✅ | — | CTA label forwarded to HeroBanner |
| `onHeroButtonClick` | `() => void` | ❌ | — | CTA handler forwarded |
| `socialLinks` | `SocialLink[]` | ❌ | — | Social links forwarded |
| `heroVisual` | `ReactNode` | ❌ | — | Visual forwarded |

## Dependencies
- HeroBanner (`organisms`)

## Usage Example
```tsx
import { MainLayout } from '@/components/templates/MainLayout';

<MainLayout
  heroTitle="App"
  heroDescription="Description"
  heroButtonLabel="CTA"
>
  <p>Page content here.</p>
</MainLayout>
```

## Accessibility
- Uses `<main>` for content region.
- HeroBanner uses `<section>` (see its spec).

## Styling
Co-located: `src/components/templates/MainLayout/styles.scss`

## Change Log
| Date | Change | Commit |
|---|---|---|
| — | Initial implementation | 0b9d504 |
