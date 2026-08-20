import { drizzle } from "drizzle-orm/better-sqlite3"
import { migrate } from "drizzle-orm/better-sqlite3/migrator"
import Database from "better-sqlite3"
import * as schema from "./schema"

const globalForDb = globalThis as unknown as {
  db?: any
}

function init() {
  try {
    const dbPath = process.env.DATABASE_PATH ?? "ensiklopedi.db"
    const sqlite = new Database(dbPath, { fileMustExist: false })
    const drizzleDb = drizzle(sqlite, { schema })
    try {
      migrate(drizzleDb, { migrationsFolder: "./drizzle" })
    } catch {
      // Ignore migration errors on serverless read-only disk
    }
    return drizzleDb
  } catch {
    // Graceful fallback for serverless environments where native sqlite is read-only/unavailable
    return null
  }
}

export const db: any = globalForDb.db ?? init()

if (process.env.NODE_ENV !== "production" && db) globalForDb.db = db
