"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Users = void 0;
var _Base = require("./Base");
class Users extends _Base.Base {
  constructor(name, email, password) {
    super();
    this.name = void 0;
    this.email = void 0;
    this.password = void 0;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
exports.Users = Users;