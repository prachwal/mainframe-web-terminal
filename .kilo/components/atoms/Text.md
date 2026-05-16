# Text

## Tier
Atom

## Description
Paragraph or inline text element with visual variants: body, caption, label.

## Props
| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| `children` | `ReactNode` | ✅ | — | Text content |
| `variant` | `'body' \| 'caption' \| 'label'` | ❌ | `'body'` | Visual variant |
| `as` | `'span' \| 'p' \| 'div'` | ❌ | `'p'` | HTML element |
| `className` | `string` | ❌ | `''` | Extra CSS class |

## Dependencies
- **External**: React
- **Internal**: none

## Usage Example
```tsx
import { Text } from '@/components/atoms/Text';

<Text>Regular paragraph</Text>
<Text variant="caption">Secondary description</Text>
<Text variant="label">Status</Text>
```

## Accessibility
- Uses semantic HTML (`<p>` by default).
- `code` variant uses `inline` display and monospace font.

## Styling
Co-located: `src/components/atoms/Text/styles.scss`

## Change Log
| Date | Change | Commit |
|---|---|---|
| — | Initial implementation | 0b9d504 |
