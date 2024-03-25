import { Users } from "Entities/User";
import { BaseRepository } from "./BaseRepository";
import { IUsersRepository } from "./IUsersRepository";
import { Drizzle, Entity } from "drizzle-orm";
import { inject, injectable } from "inversify";

@injectable()
export class UsersRepository extends BaseRepository<Users> implements IUsersRepository {
  constructor(
    @inject(Drizzle)
    drizzle: Drizzle,
    @inject(Entity)
    entity: Entity<Users>) {
    super(drizzle, entity);
  }

  async checkEmailAlreadyExist(email: string): Promise<Users | null> {
    const user =  await this.entity.findOne({ where: { email } });
    return user
  }
   
}