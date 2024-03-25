import { Post } from "Entities/Post";
import { IBaseRepository } from "./IBaseRepository";
import { injectable } from "inversify";
import { Users } from "Entities/User";
import { Drizzle  } from "drizzle-orm";

@injectable()
export class BaseRepository<T> implements IBaseRepository<T> {
  protected readonly repository: Drizzle<Users | Post>;

  constructor(repository: Drizzle<Users | Post>) {
    this.repository = repository;
  }

  async findById(id: string): Promise<T | null> {
    return await this.repository.findOne({ where: { id } });
  }

  async create(data: T): Promise<void> {
    await this.repository.create(data);
  }

  async listAll(): Promise<T[]> {
    return await this.repository.findMany();
  }

  async update(id: string, data: Partial<T>): Promise<T | null> {
    await this.repository.update({ where: { id }, data });
    return await this.findById(id);
  }
}
