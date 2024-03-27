import { Column, Entity } from "typeorm";
import { Base } from "./Base";

@Entity('Posts')
export class Post extends Base {
  @Column('title')
  title: string;

  @Column('content')
  content: string;

  @Column('author')
  author: string;

  constructor(title: string, content: string, author: string) {
    super()
    this.title = title; 
    this.content = content;
    this.author = author;
  }

}