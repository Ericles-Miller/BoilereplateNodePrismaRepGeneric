"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersRepository = void 0;
var _inversify = require("inversify");
var _BaseRepository = require("./BaseRepository");
var _client = require("@prisma/client");
var _database = require("../shared/infra/database");
var _dec, _dec2, _dec3, _dec4, _class;
let UsersRepository = exports.UsersRepository = (_dec = (0, _inversify.injectable)(), _dec2 = function (target, key) {
  return (0, _inversify.inject)('PrismaClient')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _client.PrismaClient === "undefined" ? Object : _client.PrismaClient]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UsersRepository extends _BaseRepository.BaseRepository {
  constructor(prisma) {
    super(prisma.users);
  }
  async checkEmailAlreadyExist(email) {
    const user = await _database.prisma.users.findFirst({
      where: {
        email
      }
    });
    return user;
  }
}) || _class) || _class) || _class) || _class);