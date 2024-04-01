import { PrismaClient, User } from "@prisma/client";
import { UsersService } from "Controllers/UsersService";
import { Container } from "inversify";
import { BaseRepository } from "Repositories/BaseRepository";
import { IUsersRepository } from "Repositories/IUsersRepository";
import { UsersRepository } from "Repositories/UsersRepository";

export const container = new Container();

container.bind<IUsersRepository>("IUsersRepository").to(UsersRepository).inSingletonScope();
container.bind<UsersService>(UsersService).toSelf();
container.bind<Prisma.ModelName>('PrismaClientUser').toConstantValue(new PrismaClient().user);
container.bind(BaseRepository).to(BaseRepository);
