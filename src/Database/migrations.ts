import 'dotenv/config';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { client, db } from './db';


async function migrateData() {
  await migrate(db, { migrationsFolder: '../../drizzle' });
  await client.end();
}

migrateData();