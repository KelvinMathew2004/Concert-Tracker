import pg from 'pg'
import './dotenv.js'

const isProduction = process.env.NODE_ENV === 'production'

const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    // This is the line to change 👇
    ssl: process.env.PGHOST ? { rejectUnauthorized: false } : false
}

export const pool = new pg.Pool(config)