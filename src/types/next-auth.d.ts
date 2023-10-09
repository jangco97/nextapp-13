import User from "../../prisma/generated/client";
declare module "next-auth" {
  interface Session {
    user?: {
      id?: string;
      role?: string;
    } & User;
  }
}
