import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/Database/schema.ts",
  out: "./drizzle/migrations",
  driver: "pg",
  dbCredentials: {
    host: 'localhost', //process.env.DB_HOST!,
    password: '18er0821', //process.env.DB_PASSWORD,
    database: 'test', //process.env.DB_NAME!,
    port: 5435, //Number(process.env.DB_PORT),
    user: 'postgres', // process.env.DB_USERNAME,
  },
} satisfies Config;

