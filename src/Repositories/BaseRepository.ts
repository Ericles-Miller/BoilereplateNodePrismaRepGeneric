import { Post } from "Entities/Post";
import { IBaseRepository } from "./IBaseRepository";
import { injectable } from "inversify";
import { Kysely } from 'kysely'
import { Database, PostRow, UserRow } from "@shared/infra/database/schema";


@injectable()
export class BaseRepository<T extends UserRow | PostRow, U extends 'users' | 'posts'> implements IBaseRepository<T> {
  protected readonly table: U; // preciso saber como vou lidar com isso 

  protected readonly db: Kysely<Database>

  constructor(db: Kysely<Database>, table: U) {
    this.table = table;
    this.db = db;
  }

  async findAll(): Promise<T[]> {
    const context = await this.db.selectFrom(this.table).execute();
    return context;
  }

  async findById(id: string): Promise<T | null> {
    const context = await this.db
    .selectFrom(this.table)
    .where('id', '=', id)
    .selectAll(`${this.table}`)
    .executeTakeFirst();

    return context;
  }

  async create(entity: InsertTableUserRow): Promise<void> {
    const insertedUser = await this.db
    .insertInto(this.table)
    .values(entity)
    .returningAll()
    .executeTakeFirstOrThrow()

    return insertedUser
  }

  async update(id: number, entity: T): Promise<void> {
    await this.kysely.queryBuilder().update(this.tableName).set(entity).where('id', id).execute();
  }

}
