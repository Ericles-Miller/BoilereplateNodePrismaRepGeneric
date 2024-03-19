import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";


const client = new Client({
  host: process.env.DB_HOST,
  port: NUMBER(process.env.DB_PORT),
  user: "postgres",
  password: "password",
  database: "db_name",
});

await client.connect();
const db = drizzle(client);