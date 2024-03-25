import { Request, Response } from "express";
import { UsersService } from "./UsersService";
import { container } from "@shared/IoC";


export class UserController {
  async handle(request: Request, response: Response) : Promise<Response> {
    const { name, email, password } = request.body;

    const usersService = container.get(UsersService);

    await usersService.create({email, name, password});

    return response.status(201).send();

  }
}