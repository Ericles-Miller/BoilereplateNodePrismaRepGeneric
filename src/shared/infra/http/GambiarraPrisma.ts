import { PrismaClient, User } from '@prisma/client';

export const prisma = new PrismaClient();


const { user, post} = new PrismaClient();

export interface IRepositoryConfig {
  model: typeof user | typeof post,
}

export type RepositoryType<T> = T extends typeof user ? PrismaClient['user'] : PrismaClient['post'];
