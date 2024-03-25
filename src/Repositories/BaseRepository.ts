import { Drizzle, Entity } from "drizzle-orm";
import { IBaseRepository } from "./IBaseRepository";
import { injectable } from "inversify";

@injectable()
export class BaseRepository<T> implements IBaseRepository<T> {
  protected readonly drizzle: Drizzle;
  protected readonly entity: Entity<T>;

  constructor(drizzle: Drizzle, entity: Entity<T>) {
    this.drizzle = drizzle;
    this.entity = entity;
  }

  async findById(id: string): Promise<T | null> {
    return await this.entity.findOne({ where: { id } });
  }

  async create(data: T): Promise<void> {
    await this.entity.create(data);
  }

  async listAll(): Promise<T[]> {
    return await this.entity.findMany();
  }

  async update(id: string, data: Partial<T>): Promise<T | null> {
    await this.entity.update({ where: { id }, data });
    return await this.findById(id);
  }
}
