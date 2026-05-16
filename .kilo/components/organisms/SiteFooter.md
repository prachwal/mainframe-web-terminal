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

## Styling
Co-located: `src/components/organisms/SiteFooter/styles.scss`

## Change Log
| Date | Change | Commit |
|---|---|---|
| — | Initial implementation | — |
