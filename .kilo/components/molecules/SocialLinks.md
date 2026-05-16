# SocialLinks

## Tier
Molecule

## Description
Responsive list of social media links with icon and optional label modes.

## Props

| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| `links` | `SocialLink[]` | ✅ | — | Array of link descriptors |
| `className` | `string` | ❌ | `''` | Extra CSS class |
| `labelMode` | `'visible' \| 'sr-only' \| 'responsive' \| 'icon-only'` | ❌ | `'visible'` | Control label visibility |

## `SocialLink` type
| Key | Type | Description |
|---|---|---|
| `name` | `string` | Accessible label |
| `href` | `string` | URL |
| `iconName` | `IconName` | Icon from atoms/Icon set |

## Dependencies
- Icon (`atoms`)

## Usage Example
```tsx
import { SocialLinks } from '@/components/molecules/SocialLinks';

const links = [
  { name: 'GitHub', href: 'https://github.com', iconName: 'github' },
  { name: 'Twitter', href: 'https://x.com', iconName: 'twitter' },
];

<SocialLinks links={links} />
```

## Accessibility
- Anchors open in new tab with `rel="noopener noreferrer"`.
- `target="_blank"` is explicit.
- Icon remains decorative when the link label is visible; link surfaces must preserve WCAG AA contrast.
- `labelMode="sr-only"` and `labelMode="responsive"` keep labels available to assistive tech.
- `labelMode="icon-only"` removes the visible label while preserving `aria-label` on the anchor.
- Links must provide `:focus-visible` states that are visible on both light and dark themes.

## Styling
Co-located: `src/components/molecules/SocialLinks/styles.scss`
Uses the shared icon sprite wrapper.
- Default colors must come from the semantic document palette.
- Host surfaces may override `--social-links-text`, `--social-links-bg`, `--social-links-border`, and `--social-links-shadow`.
- `labelMode="icon-only"` must use a single horizontal row with transparent link surfaces.
- `labelMode="icon-only"` should be used when the visual treatment is icon-only, such as compact footers.
- Do not read colors directly from unrelated feature tokens such as `--hero-*`.

## Testing

Unit tests live in `src/components/molecules/SocialLinks/SocialLinks.test.tsx` when behavior changes require them.
Verify decorative icon rendering and responsive label visibility.

## Change Log
| Date | Change | Commit |
|---|---|---|
| — | Initial implementation | 0b9d504 |
