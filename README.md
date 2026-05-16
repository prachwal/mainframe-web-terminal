# Mainframe Web Terminal

[![Netlify Status](https://api.netlify.com/api/v1/badges/549ea8d0-99dd-4059-8c96-da2144b78dde/deploy-status)](https://app.netlify.com/projects/mainframe-web-terminal/deploys)
[![GitHub](https://img.shields.io/badge/GitHub-mainframe--web--terminal-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/prachwal/mainframe-web-terminal)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
[![React 19](https://img.shields.io/badge/React%2019-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)

Mainframe Web Terminal is a React 19 + Vite workspace for a theme-aware terminal UI.

## What Lives Here

- Atomic Design component structure
- theme-aware mobile-first navigation
- shared sprite icons
- Netlify deployment from the `deployment` branch

## Configuration

This app reads public runtime URLs from `.env` / `.env.local` through a single typed config object:

- `VITE_SITE_URL`
- `VITE_GITHUB_URL`
- `VITE_DOCS_URL`

See [`.env.example`](./.env.example) for the template.

## Development

```bash
pnpm install
pnpm dev
pnpm test
pnpm lint
pnpm build
```

## Deployment

- Netlify site: https://mainframe-web-terminal.netlify.app
- GitHub repository: https://github.com/prachwal/mainframe-web-terminal
- Publishing branch: `deployment`

## Tooling

- React 19
- Vite
- TypeScript
- Vitest
- React Testing Library
