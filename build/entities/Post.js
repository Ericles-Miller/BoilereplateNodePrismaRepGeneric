"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Post = void 0;
var _Base = require("./Base");
class Post extends _Base.Base {
  constructor(title, content, author) {
    super();
    this.title = void 0;
    this.content = void 0;
    this.author = void 0;
    this.title = title;
    this.content = content;
    this.author = author;
  }
}
exports.Post = Post;