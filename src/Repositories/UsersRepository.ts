import { Users, UserSchema } from "Entities/User";
import { BaseRepository } from "./BaseRepository";
import { IUsersRepository } from "./IUsersRepository";
import { inject, injectable } from "inversify";
import { AppDataSource } from "@shared/infra/database";

@injectable()
export class UsersRepository extends BaseRepository<Users> implements IUsersRepository {
  constructor() {
    super(AppDataSource, UserSchema);
  }

  async checkEmailAlreadyExist(email: string): Promise<Users | null> {
    const user =  await this.repository.findOne({ where: { email } });
    return user
  }
   
}
