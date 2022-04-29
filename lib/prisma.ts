import { PrismaClient } from "@prisma/client";

// Prevent multiple instances of PrismaClient in development
declare const global: typeof globalThis & { prisma?: PrismaClient };

const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV === "development") global.prisma = primsa;

export default prisma;
