import { inject, injectable } from 'inversify';

import { PrismaClient, User } from '@prisma/client';

import { BaseRepository } from './BaseRepository';
import { IUsersRepository } from './IUsersRepository';


@injectable()
export class UsersRepository extends BaseRepository<User> implements IUsersRepository {
  constructor(
    @inject('PrismaClientUser')
    private readonly prisma: PrismaClient,
  ) {
    super(prisma.user);
  }
  async checkEmailAlreadyExist(email: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: {email}
    })

    return user;
  }

}
