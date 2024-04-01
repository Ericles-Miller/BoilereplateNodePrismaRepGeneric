import { injectable } from "inversify";
import { IBaseRepository } from "./IBaseRepository";
import { Post, User } from "@prisma/client";
import { RepositoryType } from "@shared/infra/http/GambiarraPrisma";

@injectable()
export class BaseRepository<T extends User | Post> implements IBaseRepository<T> {
  protected readonly repository: RepositoryType<T>;

  constructor(repository: RepositoryType<T>) {
    this.repository = repository;
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