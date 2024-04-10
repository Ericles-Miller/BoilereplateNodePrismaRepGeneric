"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;
require("reflect-metadata");
require("express-async-errors");
var _express = _interopRequireDefault(require("express"));
var _AppError = require("../../errors/AppError");
var _router = require("./router");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable @typescript-eslint/no-unused-vars */

const app = exports.app = (0, _express.default)();
app.use(_express.default.json());
app.use(_router.router);
app.use((err, request, response, next) => {
  if (err instanceof _AppError.AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    });
  }
  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`
  });
});