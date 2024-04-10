"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.users = exports.prisma = exports.posts = void 0;
var _client = require("@prisma/client");
const {
  users,
  posts
} = new _client.PrismaClient();
exports.posts = posts;
exports.users = users;
const prisma = exports.prisma = new _client.PrismaClient();