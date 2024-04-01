import { IBaseRepository } from './IBaseRepository';
import { User } from '@prisma/client';

export interface IUsersRepository extends IBaseRepository<User> {
  checkEmailAlreadyExist(email: string) : Promise<User | null>
}
