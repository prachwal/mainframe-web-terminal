# HeroSection

## Tier
Molecule

## Description
Hero block with title, description, and primary CTA button. Optionally renders a visual element below.

## Props
| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| `title` | `string` | ✅ | — | Bold heading |
| `description` | `string` | ✅ | — | Body text |
| `buttonLabel` | `string` | ✅ | — | CTA button label |
| `onButtonClick` | `() => void` | ❌ | — | Button click handler |
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
  description="Edit src/App.tsx and save to test HMR."
  buttonLabel="Count is 0"
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
