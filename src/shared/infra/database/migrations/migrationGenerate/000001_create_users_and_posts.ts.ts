import { Kysely, Migrator, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('users')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('name', 'varchar', (col) => col.notNull())
    .addColumn('email', 'varchar', (col) => col.unique())
    .addColumn('password', 'varchar(50)', (col) => col.notNull())
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('enable','boolean', (col) => 
      col.defaultTo(sql`true`).notNull()
    )
    .execute()

  await db.schema
    .createTable('posts')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('title', 'varchar', (col) => col.notNull().unique())
    .addColumn('author', 'varchar', (col) =>
      col.references('users.id').onDelete('cascade').notNull()
    )
    .addColumn('created_at', 'timestamp', (col) =>
    col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('content', 'varchar', (col) => col.notNull())
    .execute()

  await db.schema
    .createIndex('posts_author_id_index')
    .on('posts')
    .column('author')
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('users').execute()
  await db.schema.dropTable('posts').execute()
}

