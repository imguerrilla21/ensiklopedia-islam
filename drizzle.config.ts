import { defineConfig } from "drizzle-kit"

export default defineConfig({
  dialect: "sqlite",
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  // `url` is read by drizzle-kit migrate at runtime but is missing from the
  // published config types for this version.
  url: process.env.DATABASE_PATH ?? "./ensiklopedi.db",
} as Parameters<typeof defineConfig>[0])
