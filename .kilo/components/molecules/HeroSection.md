# HeroSection

## Tier
Molecule

## Description
Hero block with title, subtitle, and optional CTA object. Optionally renders a visual element below.

## Props
| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| `title` | `string` | ✅ | — | Bold heading |
| `subtitle` | `ReactNode` | ✅ | — | Supporting content below title |
| `cta` | `{ label: string; onClick?: () => void }` | ❌ | — | Optional CTA object |
| `children` | `ReactNode` | ❌ | — | Optional visual placed below content |

## Dependencies
- Heading (`atoms`)
- Text (`atoms`)
- Button (`atoms`)

## Usage Example
```tsx
import { HeroSection } from '@/components/molecules/HeroSection';

<HeroSection
  title="Get started"
  subtitle="Edit src/App.tsx and save to test HMR."
  cta={{ label: 'Explore the terminal' }}
/>
```

## Accessibility
- Delegates accessible roles to atoms.
- CTA is a native `<button>`.

## Styling
Co-located: `src/components/molecules/HeroSection/styles.scss`

## Change Log
| Date | Change | Commit |
|---|---|---|
| — | Initial implementation | 0b9d504 |
