"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersController = void 0;
var _UsersService = require("./UsersService");
var _IoC = require("../shared/IoC");
class UsersController {
  async handle(request, response) {
    const {
      name,
      email,
      password
    } = request.body;
    const usersService = _IoC.container.get(_UsersService.UsersService);
    await usersService.create({
      email,
      name,
      password
    });
    return response.status(201).send();
  }
}
exports.UsersController = UsersController;