import { Users } from "@entities/User";
import { IUsersRepository } from "@repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "inversify";

interface IRequestDTO {
  name: string;
  email: string;
  password: string;
}


@injectable()
export class UsersService {
  constructor(
    @inject('UsersRepository')
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