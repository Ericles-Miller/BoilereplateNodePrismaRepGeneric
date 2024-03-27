import { Base } from "Entities/Base";

export interface IBaseRepository<T extends Base> {
  findById(id: string) : Promise<T | null> ;
  create(data: T) : Promise<void>;
  listAll() : Promise<T[]>;
  update(id: string, entity: T) : Promise<void>;
}

