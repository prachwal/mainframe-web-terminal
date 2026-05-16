import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')

  const appConfig = {
    siteUrl: env.VITE_SITE_URL ?? 'https://mainframe-web-terminal.netlify.app',
    githubUrl: env.VITE_GITHUB_URL ?? 'https://github.com/prachwal/mainframe-web-terminal',
    docsUrl: env.VITE_DOCS_URL ?? 'https://vite.dev',
  } as const

  return {
    plugins: [react()],
    define: {
      __APP_CONFIG__: JSON.stringify(appConfig),
    },
    test: {
      environment: 'jsdom',
      setupFiles: ['./src/test/setup.ts'],
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
