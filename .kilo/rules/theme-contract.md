# Theme Contract Rule

## Scope
Any change that affects layout, colors, component surfaces, or theming behavior MUST verify that the document theme state stays synchronized.

## Required Checks
- `theme-mode` stored in state or localStorage must be a supported `ThemeMode`
- `document.documentElement.dataset.themeMode` must match the active mode
- `document.documentElement.dataset.theme` must match the resolved mode
- `document.documentElement.style.colorScheme` must match the resolved mode

## Enforcement
- Runtime bootstraps must call the theme synchronization helper before rendering UI.
- Theme reducers must re-apply and verify the document state after every theme mutation.
- Unit tests must cover both persistence and document synchronization for any theme change.

## Styling Expectations
- Prefer mobile-first layout decisions.
- Prefer fluid sizing such as `clamp()` for spacing and type when a component scales across breakpoints.
- Prefer modern color functions or token abstractions over raw magic colors when introducing new theme surfaces.

## Review Gate
- Any UI or theme change that can influence the rendered color scheme is incomplete until the corresponding tests pass.
