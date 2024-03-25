import { UsersService } from "Controllers/UsersService";
import { Container } from "inversify";
import { IUsersRepository } from "Repositories/IUsersRepository";
import { UsersRepository } from "Repositories/UsersRepository";

export const container = new Container();


container.bind<IUsersRepository>("IUsersRepository").to(UsersRepository);
container.bind<UsersService>("UsersService").to(UsersService);
container.bind<UsersService>(UsersService).toSelf();
