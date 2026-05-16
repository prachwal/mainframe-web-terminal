# ThemeModeSwitch

## Tier
Molecule

## Description
Segmented control for switching between light, dark, and system theme modes.

## Props

| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| `value` | `ThemeMode` | ✅ | — | Active theme mode |
| `onChange` | `(mode: ThemeMode) => void` | ✅ | — | Selection callback |
| `className` | `string` | ❌ | `''` | Extra CSS class |

## Dependencies
- Internal: `Button`, `Text`
- External: React

## Usage Example

```tsx
import { ThemeModeSwitch } from '@/components/molecules/ThemeModeSwitch';

<ThemeModeSwitch value="system" onChange={(mode) => console.log(mode)} />
```

## Accessibility
- Grouped buttons expose `aria-pressed` state.
- Buttons remain keyboard reachable and use native `<button>` semantics.
- Control label remains visible and semantic.

## Styling

Co-located: `src/components/molecules/ThemeModeSwitch/styles.scss`
Uses mobile-first wrapping and theme tokens.

## Testing

Unit tests live in `src/components/molecules/ThemeModeSwitch/ThemeModeSwitch.test.tsx`.
Verify the active pressed state and callback dispatch.

## Change Log

| Date | Change | Commit |
|---|---|---|

