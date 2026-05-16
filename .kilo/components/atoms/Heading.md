# Heading

## Tier
Atom

## Description
Semantic heading element (`h1` through `h6`) with responsive font sizing.

## Props

| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| `level` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | ❌ | `'h1'` | HTML heading level |
| `children` | `ReactNode` | ✅ | — | Heading text |
| `className` | `string` | ❌ | `''` | Extra CSS class |

## Dependencies
- **External**: React
- **Internal**: none

## Usage Example

```tsx
import { Heading } from '@/components/atoms/Heading';

<Heading level="h1" />
<Heading level="h2" />
<Heading level="h3" />
```

## Accessibility

- Renders proper semantic HTML tags.
- Color contrast follows dark-mode token defaults.

## Styling

Co-located: `src/components/atoms/Heading/styles.scss`

## Testing

Unit tests live in `src/components/atoms/Heading/Heading.test.tsx`.
Cover semantic heading levels and rendered text.

## Change Log

| Date | Change | Commit |
|---|---|---|
| — | Initial implementation | 0b9d504 |
