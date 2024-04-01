import { AppError } from "@shared/errors/AppError";
import { Users } from "Entities/User";
import { inject, injectable } from "inversify";
import { IUsersRepository } from "Repositories/IUsersRepository";
import { UsersRepository } from "Repositories/UsersRepository";

interface IRequestDTO {
  name: string;
  email: string;
  password: string;
}


@injectable()
export class UsersService {
  constructor(
    @inject('IUsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async create({email, name,password }: IRequestDTO) : Promise<void> {    
    
    const userAlreadyExists = await this.usersRepository.checkEmailAlreadyExist(email);
        
    if(userAlreadyExists) {
      throw new AppError('user already exists with email!', 400);
    }

    const user = new Users(name, email, password);
    
    await this.usersRepository.create(user);
  }
}