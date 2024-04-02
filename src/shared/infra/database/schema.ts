import { Post } from "Entities/Post";
import { Users } from "Entities/User";
import { Generated, Insertable, Selectable, Updateable } from "kysely";

export interface IUserTable {
  id: Generated<string>;
  name: string;
  email: string;
  password: string;
  createdAt: Generated<Date>;
  updatedAt?: Generated<Date>;
  enable: Generated<boolean>;
}

export type UserRow = Selectable<Users>
// export type InsertTableUserRow = Insertable<IUserTable> nao sei se preciso
// export type UpdateAbleUserRow = Updateable<IUserTable>

export interface IPost {
  id : string;
  title: string;
  author : string;
  createdAt: Date;
  updatedAt: Date;
}
export type PostRow = Selectable<Post>
// export type PostRow = Selectable<IUserTable>


export interface Database {
  users: IPost
  posts: IUserTable
}