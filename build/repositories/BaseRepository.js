"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRepository = void 0;
var _inversify = require("inversify");
var _database = require("../shared/infra/database");
var _dec, _dec2, _dec3, _class;
let BaseRepository = exports.BaseRepository = (_dec = (0, _inversify.injectable)(), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", [typeof _database.RepositoryType === "undefined" ? Object : _database.RepositoryType]), _dec(_class = _dec2(_class = _dec3(_class = class BaseRepository {
  constructor(repository) {
    this.repository = void 0;
    this.repository = repository;
  }
  async findById(id) {
    const context = await this.repository.findUnique({
      where: {
        id
      }
    });
    return context;
  }
  async create(data) {
    await this.repository.create({
      data
    });
  }
  async listAll() {
    const context = await this.repository.findMany();
    return context;
  }
  async update(id, data) {
    const context = await this.repository.update({
      where: {
        id
      },
      data
    });
    return context;
  }
}) || _class) || _class) || _class);