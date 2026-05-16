# MainLayout

## Tier
Template

## Description
App shell wrapper with optional `header` and `footer` slots around the main content area.

## Props
| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| `header` | `ReactNode` | ❌ | — | Optional header slot |
| `children` | `ReactNode` | ✅ | — | Page content inside `<main>` |
| `footer` | `ReactNode` | ❌ | — | Optional footer slot |

## Dependencies
- HeroBanner (`organisms`)

## Usage Example
```tsx
import { MainLayout } from '@/components/templates/MainLayout';

<MainLayout header={<header>Top</header>} footer={<footer>Bottom</footer>}>
  <p>Page content here.</p>
</MainLayout>
```

## Accessibility
- Uses `<main>` for content region.
- Content region uses `<main>` (see page specs for composition).

## Styling
Co-located: `src/components/templates/MainLayout/styles.scss`

## Change Log
| Date | Change | Commit |
|---|---|---|
| — | Initial implementation | 0b9d504 |
