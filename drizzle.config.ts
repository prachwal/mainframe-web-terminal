import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schema.ts',
  dbCredentials: {
    url: process.env.NETLIFY_DB_URL!,
  },
  /**
   * Netlify Database owns this folder and applies migrations on deploy.
   * Use drizzle-kit to generate/apply changes; do not edit generated files by hand.
   */
  out: './netlify/database/migrations',
});
