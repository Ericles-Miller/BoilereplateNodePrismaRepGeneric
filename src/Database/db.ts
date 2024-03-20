import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from 'pg';


const client = new pg.Client({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USERNAME,
  password: 'docker',
  database: process.env.DB_NAME,
});

client.connect().then(() => {
  console.log('Connect successfully');
}).catch(((error) => console.log(error)));

export const database = drizzle(client);

