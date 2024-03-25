import { Router } from "express";
import { router } from ".";
import { UserController } from "Controllers/UserController";



export const usersRoutes = Router();

const usersController = new UserController();

usersRoutes.post('/', usersController.handle)