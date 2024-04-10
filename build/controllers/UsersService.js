"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersService = void 0;
var _User = require("../entities/User");
var _IUsersRepository = require("../repositories/IUsersRepository");
var _AppError = require("../shared/errors/AppError");
var _inversify = require("inversify");
var _dec, _dec2, _dec3, _dec4, _class;
let UsersService = exports.UsersService = (_dec = (0, _inversify.injectable)(), _dec2 = function (target, key) {
  return (0, _inversify.inject)('UsersRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.IUsersRepository === "undefined" ? Object : _IUsersRepository.IUsersRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UsersService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async create({
    email,
    name,
    password
  }) {
    const userAlreadyExists = await this.usersRepository.checkEmailAlreadyExist(email);
    if (userAlreadyExists) {
      throw new _AppError.AppError('user already exists with email!', 400);
    }
    const user = new _User.Users(name, email, password);
    await this.usersRepository.create(user);
  }
}) || _class) || _class) || _class) || _class);