import { UsersService } from "Controllers/UsersService";
import { Users } from "Entities/User";
import { Container } from "inversify";
import { IUsersRepository } from "Repositories/IUsersRepository";
import { UsersRepository } from "Repositories/UsersRepository";

export const container = new Container();

container.bind<IUsersRepository>(UsersRepository).toSelf().inSingletonScope();
container.bind<UsersService>(UsersService).toSelf();
container.bind<Users>('users').toConstantValue('users');
