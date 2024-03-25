  import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";

  export const users = pgTable("user", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    password: text("password").notNull(),
    createdAt: timestamp("created_at"),
    updatedAt: timestamp("updated_at"),
    enable: text("enable"),
  });


  export const posts = pgTable('post', {
    id: serial('id').primaryKey(),
    name: text('name'),
    description: text('description'),
    createdAt: timestamp('createdAt'),
    updateAt: timestamp('updatedAt'),
    enable: text('enable').default('true'),
    authorId: serial("author_id").references(() => users.id)
  });


  export interface IRepositoryConfig {
    model: typeof users | typeof posts,
  }