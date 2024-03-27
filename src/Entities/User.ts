import { Column, Entity, EntitySchema } from "typeorm";
import { Base } from "./Base";


@Entity('Users')
export class Users extends Base {
  @Column('name')
  name: string;

  @Column('email')
  email: string;

  @Column('password')
  password: string;

  constructor(name: string, email: string, password: string) {
    super();
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

export const UserSchema = new EntitySchema<Users>({
  name: "User",
  target: Users,
  columns: {
      id: {
          type: String,
          primary: true,
          generated: true
      },
      name: {
          type: String,
          length: 100
      },
      password: {
        type: String,
        length: 100
    },
      email: {
          type: String,
          length: 100,
          unique: true
      },
      createdAt: {
          type: Date,
          createDate: true
      },
      updatedAt: {
          type: Date,
          updateDate: true
      }
  }
})