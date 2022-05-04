import type { PrismaClient } from "@prisma/client";

export interface global {}

declare global {
  var prisma: PrismaClient;

  interface BigInt {
    toJSON: () => string;
  }
}
