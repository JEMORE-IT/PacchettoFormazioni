import { Pool } from "pg";

declare global {
  var _postgresPool: Pool | undefined
}

class PostgresDB {
  private static instance: PostgresDB
  public pool: Pool

  private constructor() {
    if (!process.env.DATABASE_URL) {
      throw new Error('POSTGRES_URL environment variable is not defined')
    }

    // Configurazione con connection string
    this.pool = global._postgresPool || new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 20, // numero massimo di client nel pool
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
    })

    // In sviluppo, mantieni il pool in globalThis
    if (process.env.NODE_ENV === 'development' && !global._postgresPool) {
      global._postgresPool = this.pool
    }

    this.pool.on('error', (err) => {
      console.error('Unexpected error on idle PostgreSQL client', err)
    })
  }

  public static getInstance(): PostgresDB {
    if (!PostgresDB.instance) {
      PostgresDB.instance = new PostgresDB()
    }
    return PostgresDB.instance
  }

  public async query(sql: string, params?: any[]) {
    const client = await this.pool.connect()
    try {
      return await client.query(sql, params)
    } finally {
      client.release()
    }
  }

  public async close() {
    await this.pool.end()
    global._postgresPool = undefined
  }
}

const db = PostgresDB.getInstance()

// Chiudi pulitamente alla terminazione dell'app
process.on('beforeExit', async () => {
  await db.close()
})

export { db }