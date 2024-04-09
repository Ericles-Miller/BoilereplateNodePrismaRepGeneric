import { Posts, PrismaClient, Users } from "@prisma/client";
import { prisma } from "@shared/infra/database";
import { UsersService } from "Controllers/UsersService";
import { Container } from "inversify";
import { BaseRepository } from "Repositories/BaseRepository";
import { IUsersRepository } from "Repositories/IUsersRepository";
import { UsersRepository } from "Repositories/UsersRepository";

export const container = new Container();

container.bind<IUsersRepository>(UsersRepository).toSelf().inSingletonScope();
container.bind<BaseRepository<Users>>('UsersRepository').to(UsersRepository)
//container.bind<BaseRepository<Posts>>('PostRepository').to(PostRepository)
container.bind<PrismaClient>('PrismaClient').toConstantValue(prisma);

container.bind<UsersService>(UsersService).toSelf()