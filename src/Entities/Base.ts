import {v4 as uuid} from 'uuid';

export class Base {
  id: string;

  createdAt!: Date;

  updatedAt?: Date;

  enable!: boolean;

  constructor() {
    this.id = uuid();
    this.createdAt = new Date();
    this.enable = true;
  }

  
  setUpdatedAt(date: Date): void {
    this.updatedAt = new Date();
  }

  getUpdatedAt(): Date | undefined {
    return this.updatedAt;
  }
}
