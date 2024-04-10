"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.container = void 0;
var _UsersService = require("../../controllers/UsersService");
var _UsersRepository = require("../../repositories/UsersRepository");
var _database = require("../infra/database");
var _inversify = require("inversify");
const container = exports.container = new _inversify.Container();
container.bind(_UsersRepository.UsersRepository).toSelf().inSingletonScope();
container.bind('UsersRepository').to(_UsersRepository.UsersRepository);
//container.bind<BaseRepository<Posts>>('PostRepository').to(PostRepository)
container.bind('PrismaClient').toConstantValue(_database.prisma);
container.bind(_UsersService.UsersService).toSelf();