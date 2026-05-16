# Icon

## Tier
Atom

## Description
Lightweight inline SVG icon component with preset path-based set.

## Props
| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| `name` | `IconName` (union, 7 icon types) | ✅ | — | Icon identifier |
| `size` | `number` | ❌ | `22` | Width and height in pixels |
| `className` | `string` | ❌ | `''` | Extra CSS class |
| `...rest` | `SVGProps<SVGSVGElement>` | ❌ | — | Additional SVG attributes |

## Supported Icons
`github`, `linkedin`, `twitter`, `documentation`, `social`, `arrow-right`, `check`

## Dependencies
- **External**: React
- **Internal**: none

## Usage Example
```tsx
import { Icon } from '@/components/atoms/Icon';

<Icon name="github" />
<Icon name="arrow-right" size={24} />
```

## Accessibility
- `role="presentation"` and `aria-hidden="true"` by default (decoration).
- For interactive icons, override with meaningful `aria-label`.

## Styling
Co-located: `src/components/atoms/Icon/styles.scss`

## Change Log
| Date | Change | Commit |
|---|---|---|
| — | Initial implementation | 0b9d504 |
