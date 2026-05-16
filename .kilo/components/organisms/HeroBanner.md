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
- Background media is decorative and hidden from assistive technology.
- CTA is a native `<button>`, and social links remain semantic anchors.

## Styling
Co-located: `src/components/organisms/HeroBanner/styles.scss`

## Change Log
| Date | Change | Commit |
|---|---|---|
| — | Initial implementation | 0b9d504 |
