import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var __db__: PrismaClient;
}

let db: PrismaClient;

// Always create a fresh client to avoid caching issues
db = new PrismaClient();

export { db };