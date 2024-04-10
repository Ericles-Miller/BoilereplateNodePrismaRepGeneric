"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = void 0;
var _uuid = require("uuid");
class Base {
  constructor() {
    this.id = void 0;
    this.createdAt = void 0;
    this.updatedAt = void 0;
    this.enable = void 0;
    this.id = (0, _uuid.v4)();
    this.createdAt = new Date();
    this.enable = true;
    this.updatedAt = null;
  }
  setUpdatedAt(date) {
    this.updatedAt = new Date();
  }
  getUpdatedAt() {
    return this.updatedAt;
  }
}
exports.Base = Base;