# HeroBanner

## Tier
Organism

## Description
Full hero display combining a `HeroSection` with optional social links.

## Props
| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| `title` | `string` | ✅ | — | Hero title |
| `description` | `string` | ✅ | — | Hero descriptor text |
| `buttonLabel` | `string` | ✅ | — | CTA button text |
| `onButtonClick` | `() => void` | ❌ | — | Button click handler |
| `socialLinks` | `SocialLink[]` | ❌ | — | Social links rendered below CTA |
| `visual` | `ReactNode` | ❌ | — | Optional decorative visual |

## Dependencies
- HeroSection (`molecules`)
- SocialLinks (`molecules`)

## Usage Example
```tsx
import { HeroBanner } from '@/components/organisms/HeroBanner';

<HeroBanner
  title="Hello"
  description="Welcome to the platform."
  buttonLabel="Get started"
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
