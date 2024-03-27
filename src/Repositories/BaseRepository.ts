import { Users } from "Entities/User";
import { IBaseRepository } from "./IBaseRepository";
import { injectable } from "inversify";
import { DataSource, EntitySchema, FindOptionsWhere, Repository } from "typeorm";
import { Post } from "Entities/Post";

@injectable()
export class BaseRepository<T extends Users | Post> implements IBaseRepository<T> {
  protected readonly repository: Repository<T>;

  constructor(dataSource: DataSource, entity: EntitySchema<T>) {
    this.repository = dataSource.getRepository<T>(entity);
  }

  async findById(id: string): Promise<T | null> {
    return await this.repository.findOneBy({ id } as FindOptionsWhere<T>)
  }

  async create(data: T): Promise<void> {
    await this.repository.save(data);
  }

  async listAll(): Promise<T[]> {
    return await this.repository.find();
  }

  async update(id: string, entity:T): Promise<void> {
    const r = { id, ...entity }
    await this.repository.save(r)
  }
}
