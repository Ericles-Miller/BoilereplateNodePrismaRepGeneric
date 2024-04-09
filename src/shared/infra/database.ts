import { PrismaClient, Users } from "@prisma/client";


export const {users, posts } = new PrismaClient();

export type RepositoryType<T> = T extends Users ? PrismaClient['users'] : PrismaClient['posts']

export const prisma = new PrismaClient();
