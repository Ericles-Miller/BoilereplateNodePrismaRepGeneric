import { PostRow, UserRow } from "@shared/infra/database/schema";

export interface IBaseRepository<T extends UserRow | PostRow> {
  findById(id: string) : Promise<T | null> ;
  create(data: T) : Promise<void>;
  listAll() : Promise<T[]>;
  update(id: string, data: T) : Promise<T | null>;
}

  