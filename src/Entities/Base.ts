import {v4 as uuid} from 'uuid';

export class Base {
  id: string;
  createdAt!: Date;
  updatedAt?: Date;
  enable!: boolean;

  constructor() {
    if(!this.id) {
      this.id = uuid();
      this.enable = true
      this.createdAt = new Date();
    }
  }

  setCreatedAt(date: Date): void {
    this.createdAt = new Date();
  }
  setUpdatedAt(date: Date): void {
    this.updatedAt = new Date();
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date | undefined {
    return this.updatedAt;
  }
}
