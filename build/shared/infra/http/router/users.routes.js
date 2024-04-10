"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersRoutes = void 0;
var _UserController = require("../../../../controllers/UserController");
var _express = require("express");
const usersRoutes = exports.usersRoutes = (0, _express.Router)();
const usersController = new _UserController.UsersController();
usersRoutes.post('/', usersController.handle);