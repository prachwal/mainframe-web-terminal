# Icon

## Tier
Atom

## Description
Lightweight SVG sprite wrapper for preset app icons.

## Props

| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| `name` | `IconName` (union, 9 icon types) | ✅ | — | Icon identifier |
| `size` | `'sm' \| 'md' \| 'lg'` | ❌ | `'md'` | Icon size |
| `className` | `string` | ❌ | `''` | Extra CSS class |
| `ariaLabel` | `string` | ❌ | — | Accessible label for meaningful icons |
| `...rest` | `SVGProps<SVGSVGElement>` | ❌ | — | Additional SVG attributes |

## Supported Icons
`github`, `linkedin`, `twitter`, `documentation`, `social`, `arrow-right`, `check`, `menu`, `close`

## Dependencies
- **External**: React
- **Internal**: none

## Usage Example

```tsx
import { Icon } from '@/components/atoms/Icon';

<Icon name="github" />
<Icon name="arrow-right" size="lg" ariaLabel="Next" />
```

## Accessibility

- Decorative by default.
- Provide `ariaLabel` when the icon conveys meaning.

## Styling

Co-located: `src/components/atoms/Icon/styles.scss`
Uses the shared sprite from `public/icons.svg` and inherits color from the parent.

## Testing

Unit tests live in `src/components/atoms/Icon/Icon.test.tsx`.
Cover decorative defaults, accessible labelling, and sprite symbol lookup.

## Change Log

| Date | Change | Commit |
|---|---|---|
| — | Initial implementation | 0b9d504 |
