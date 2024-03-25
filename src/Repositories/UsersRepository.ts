import { Users } from "Entities/User";
import { BaseRepository } from "./BaseRepository";
import { IUsersRepository } from "./IUsersRepository";
import { inject, injectable } from "inversify";
import { users } from '../Database/schema';


@injectable()
export class UsersRepository extends BaseRepository<Users> implements IUsersRepository {
  constructor(
    @inject("users")
    private readonly users : Users
  ) {
    super(users); 
  }

  async checkEmailAlreadyExist(email: string): Promise<Users | null> {
    const user =  await this.repository.findOne({ where: { email } });
    return user
  }
   
}