import { Users } from "@prisma/client";

export type RegisterParams = {
  email: string;
  password: string;
  name: string;
};

export type successRegister = {
  token: string;
  user: Users;
};

export type errorRegister = {
  message: string;
};
