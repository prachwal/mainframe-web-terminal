# SiteFooter

## Tier
Organism

## Description
Professional footer with grouped links, social links, and legal copy.

## Props
| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| `className` | `string` | ❌ | `''` | Optional extra class |

## Dependencies
- SocialLinks (`molecules`)
- Text (`atoms`)

## Usage Example
```tsx
import { SiteFooter } from '@/components/organisms/SiteFooter';

<SiteFooter />
```

## Accessibility
- Sections and lists are semantic.
- External links use `rel="noopener noreferrer"`.
- Social links may collapse to icon-only presentation on narrow screens while preserving accessible names.

## Styling
Co-located: `src/components/organisms/SiteFooter/styles.scss`
Mobile-first grid with responsive social link labels.

## Testing

Unit tests should live in `src/components/organisms/SiteFooter/SiteFooter.test.tsx`.
Verify link grouping and responsive social link presentation.

## Change Log
| Date | Change | Commit |
|---|---|---|
| — | Initial implementation | — |
