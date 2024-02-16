import type { Config } from 'drizzle-kit';

export default {
  schema: './src/utils/schema.ts',
  out: './drizzle', // Where to store migration files
  driver: 'turso', // Specify the Turso driver
  verbose: true,
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL!, // Replace with your Turso database URL
    authToken: process.env.TURSO_AUTH_TOKEN // Replace with your Turso authentication token
  },
} satisfies Config;