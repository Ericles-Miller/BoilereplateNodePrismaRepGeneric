import { Base } from "./Base";

export class User extends Base {
  name: string
  email: string
  password: string;
  registration: string

  constructor(name: string, email: string, password: string, createdAt: Date = new Date(), registration: string) {
    super();
    this.name = name;
    this.email = email;
    this.password = password;
    this.registration = registration;
  }

}