# AGENTS.md

To be created by Kilo Agent Manager.

## Project Setup

- **Package Manager**: pnpm
- **Build Tool**: Vite
- **Language**: TypeScript + React 19

## Project Structure

```tree
mainframe-web-terminal/
├── src/          # Source code
├── public/       # Static assets
├── dist/         # Build output
├── node_modules/ # Dependencies
├── AGENTS.md     # This file
├── README.md
├── index.html
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── eslint.config.js
├── .prettierrc
├── .prettierignore
├── .editorconfig
└── commitlint.config.js
```

## Development Workflow

1. **Install dependencies**: `pnpm install`
2. **Run dev server**: `pnpm dev`
3. **Build**: `pnpm build`
4. **Preview**: `pnpm preview`
5. **Lint**: `pnpm lint`
6. **Format**: `pnpm format`

## Git & Commit Conventions

- Use [Conventional Commits](https://www.conventionalcommits.org/): `type(scope): subject`
- Valid types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
- Commitlint validates commits before allowing them

## Code Style

- **ESLint**: TypeScript + React Hooks + React Refresh
- **Prettier**: 2-space indent, single quotes, semicolons, 100 char width
- **TypeScript**: Strict mode enabled
