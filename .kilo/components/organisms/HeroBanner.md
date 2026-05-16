# HeroBanner

## Tier
Organism

## Description
Full viewport hero display with a background product image, headline, CTA, platform signals, and optional social links.

## Props
| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| `title` | `string` | ✅ | — | Hero title |
| `eyebrow` | `string` | ❌ | — | Short context label above the title |
| `subtitle` | `ReactNode` | ✅ | — | Hero descriptor content |
| `cta` | `{ label: string; onClick?: () => void }` | ❌ | — | CTA button object |
| `socialLinks` | `SocialLink[]` | ❌ | — | Social links rendered below CTA |

## Dependencies
- Button (`atoms`)
- Heading (`atoms`)
- Text (`atoms`)
- SocialLinks (`molecules`)

## Usage Example
```tsx
import { HeroBanner } from '@/components/organisms/HeroBanner';

<HeroBanner
  eyebrow="Production terminal interface"
  title="Mainframe Web Terminal"
  subtitle="A composed React 19 command surface."
  cta={{ label: 'Launch terminal' }}
  socialLinks={links}
/>
```

## Accessibility
- Uses semantic `<section>` with `aria-labelledby`.
- Background media is decorative, hidden from assistive technology, and does not expose redundant labels.
- CTA is a native `<button>`, and social links remain semantic anchors.
- Hero surface and signal chips are theme-aware and must maintain WCAG AA contrast in both light and dark modes.
- If the hero image is critical to LCP, preload it and keep the visual overlay readable without relying on JavaScript.

## Styling
Co-located: `src/components/organisms/HeroBanner/styles.scss`

## Change Log
| Date | Change | Commit |
|---|---|---|
| — | Initial implementation | 0b9d504 |
