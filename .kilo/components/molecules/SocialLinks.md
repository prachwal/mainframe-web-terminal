# SocialLinks

## Tier
Molecule

## Description
Responsive list of social media links with icon and label.

## Props
| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| `links` | `SocialLink[]` | ✅ | — | Array of link descriptors |
| `className` | `string` | ❌ | `''` | Extra CSS class |

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

## Styling
Co-located: `src/components/molecules/SocialLinks/styles.scss`

## Change Log
| Date | Change | Commit |
|---|---|---|
| — | Initial implementation | 0b9d504 |
