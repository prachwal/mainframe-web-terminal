# SiteFooter

## Tier
Organism

## Description
Professional footer with resources, support, legal links, social links, and legal copy.

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
- Social links use icon-only presentation while preserving accessible names through `aria-label`.

## Styling
Co-located: `src/components/organisms/SiteFooter/styles.scss`
Mobile-first grid with icon-only social links.
- External footer URLs should come from the typed runtime config object, not hardcoded literals.
- Footer navigation should focus on secondary destination groups such as resources, support, and legal.
- Footer nav links use a smaller, specialized typographic scale (`tokens.$font-size-sm`) so they stay
  visually lighter than the primary header navigation.
- Footer should not duplicate main navigation pages such as Home, Terminal, Settings, or About.
- Footer social links must use the shared social-links color contract with semantic defaults.
- Footer social links must render as a single horizontal row with transparent surfaces.
- Footer text colors should stay on `--color-text` / `--color-text-heading` and not depend on hero-specific tokens.

## Testing

Unit tests should live in `src/components/organisms/SiteFooter/SiteFooter.test.tsx`.
Verify resource/support/legal link grouping and icon-only social link presentation.

## Change Log
| Date | Change | Commit |
|---|---|---|
| — | Initial implementation | — |
