# HeroBanner

## Tier
Organism

## Description
Full hero display combining a `HeroSection`, hero image, and optional social links.

## Props
| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| `title` | `string` | ✅ | — | Hero title |
| `subtitle` | `ReactNode` | ✅ | — | Hero descriptor content |
| `cta` | `{ label: string; onClick?: () => void }` | ❌ | — | CTA button object |
| `socialLinks` | `SocialLink[]` | ❌ | — | Social links rendered below CTA |

## Dependencies
- HeroSection (`molecules`)
- SocialLinks (`molecules`)

## Usage Example
```tsx
import { HeroBanner } from '@/components/organisms/HeroBanner';

<HeroBanner
  title="Hello"
  subtitle="Welcome to the platform."
  cta={{ label: 'Get started' }}
  socialLinks={links}
/>
```

## Accessibility
- Delegates to atoms via molecules.
- Uses semantic `<section>` for hero section, `<ul>` for social links.

## Styling
Co-located: `src/components/organisms/HeroBanner/styles.scss`

## Change Log
| Date | Change | Commit |
|---|---|---|
| — | Initial implementation | 0b9d504 |
