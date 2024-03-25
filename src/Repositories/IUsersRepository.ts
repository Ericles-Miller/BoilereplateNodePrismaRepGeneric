import { Users } from 'Entities/User';
import { IBaseRepository } from './IBaseRepository';

export interface IUsersRepository extends IBaseRepository<Users> {
  checkEmailAlreadyExist(email: string) : Promise<Users | null>
}
