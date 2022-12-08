import { Users } from "@prisma/client";

export type LoginParams = {
  email: string;
  password: string;
};

export type successLogin = {
  token: string;
  user: Users;
};

export type errorLogin = {
  message: string;
};
