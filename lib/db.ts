import { Pool } from "pg";
import path from "path";
import fs from "fs";

let pool: Pool | null = null;

export function getDbPool(): Pool {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL, // URL del database
      ssl: {
        rejectUnauthorized: false, // Disabilita la verifica del certificato SSL
      },
    });
    console.log("Database pool created");
  }
  return pool;
}

export async function applySchema() {
    const schemaPath = path.join(process.cwd(), "sql", "schema.sql");
    const schema = fs.readFileSync(schemaPath, "utf8");
  
    const pool = getDbPool();
    try {
      await pool.query(schema);
      console.log("Schema applied successfully");
    } catch (error) {
      console.error("Failed to apply schema:", error);
    }
  }