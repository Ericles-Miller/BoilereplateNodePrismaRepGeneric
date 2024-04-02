import { Pool } from 'pg'
import { FileMigrationProvider, Kysely, Migrator, PostgresDialect } from 'kysely'
import { Database } from './schema'
import * as path from 'path'
import { promises as fs } from 'fs'

const dialect = new PostgresDialect({
  pool: new Pool({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    port: Number(process.env.DB_PORT),
    max: 10,
  })
})


export const db = new Kysely<Database>({
  dialect,
})

async function migrateToLatest() {

  const migrator = new Migrator({
    db,
    provider: new FileMigrationProvider({
      fs,
      path,
      migrationFolder: path.join(__dirname, './migrations/migrationGenerate'),
    }),
  })

  const { error, results } = await migrator.migrateToLatest();

  results?.forEach((it) => {
    if (it.status === 'Success') {
      console.log(`migration "${it.migrationName}" was executed successfully`);
    } else if (it.status === 'Error') {
      console.error(`failed to execute migration "${it.migrationName}"`);
    }
  })

  if (error) {
    console.error('failed to migrate');
    console.error(error);
    process.exit(1);
  }

  await db.destroy();
}

migrateToLatest()

