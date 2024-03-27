import { Column, PrimaryGeneratedColumn } from 'typeorm';
import {v4 as uuid} from 'uuid';

export class Base {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column('createdAt')
  createdAt!: Date;

  @Column('updateAt')
  updatedAt?: Date;

  @Column('enable')
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
