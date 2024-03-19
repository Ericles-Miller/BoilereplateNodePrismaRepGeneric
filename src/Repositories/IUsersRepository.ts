/* eslint-disable @typescript-eslint/no-empty-interface */

import { IBaseRepository } from './IBaseRepository';

export interface IUserRepository extends IBaseRepository<Users> {
  // add somente especifica do user
  checkRegistrationAlreadyExist(registration: string) : Promise<Users | null>

}
