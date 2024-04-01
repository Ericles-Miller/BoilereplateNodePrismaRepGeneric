import { injectable } from "inversify";

import { createDecoratorProxy } from "Entities/Decorator";
import { IBaseRepository } from "./IBaseRepository";

@injectable()
export class BaseRepository<T> extends createDecoratorProxy<T>([
  "aggregate",
  "count",
  "create",
  "createMany",
  "delete",
  "findFirst",
  "findFirstOrThrow",
  "findMany",
  "findUnique",
  "findUniqueOrThrow",
  "update",
  "updateMany",
  "upsert",
]) {
  constructor(private target: T) {
    super(target);
  }

  async findById<T>(id: string): Promise<T> {
    const context = await this.repository.findUnique({
      where: {
        id,
      },
    });

    return context;
  }

  async create(data: T): Promise<void> {
    
    await this.repository.create({
      data,
    });
  }

  async listAll(): Promise<T[]> {
    const context = await this.repository.findMany();
    return context;
  }

  async update<T>(id: string, data: T): Promise<T> {
    const context = await this.repository.update({
      where: {
        id,
      },
      data,
    });

    return context;
  }
}