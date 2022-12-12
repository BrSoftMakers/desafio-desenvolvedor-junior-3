import { Users } from "@prisma/client";

export type User = Users;

export type ArrayOfUsers = User[];

export type UserWithoudId = Omit<User, "id">;

export type ArrayOfUsersWithoudId = UserWithoudId[];
