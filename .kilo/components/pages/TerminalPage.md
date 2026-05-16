# TerminalPage

## Tier
Page

## Description
Terminal workspace page with a database-backed post creator and recent posts list.

## Route
`/terminal`

## Dependencies
- PageShell (`templates`)
- Heading (`atoms`)
- Text (`atoms`)
- Button (`atoms`)

## Usage Example
```tsx
import { TerminalPage } from '@/components/pages/TerminalPage';

<TerminalPage />
```

## Accessibility
- Uses semantic headings, a labeled form, and readable API status feedback.

## Styling
Co-located: `src/components/pages/TerminalPage/styles.scss`

## Change Log
| Date | Change | Commit |
|---|---|---|
| — | Initial implementation | — |
| 2026-05-16 | Added Netlify Database post creator UI | feat(db) |
