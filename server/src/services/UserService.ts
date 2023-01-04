import prisma from '../database/prisma';
import { ErrorTypes } from '../errors/catalog';
import ILoginInput from '../interfaces/ILoginInput';

export default class UserService {
  private getUserByUsername = async (username: string) => prisma.user
    .findFirst({
      where: { 
        username: {
          equals: username,
          mode: 'insensitive', 
        } },
    });

  public findUser = async ({ username, password }: ILoginInput) => {
    const user = await this.getUserByUsername(username);
    if (!user) throw new Error(ErrorTypes.EntityNotFound);

    if (user.password === password) {
      return { username: user.username, name: user.name, role: user.role };
    } throw new Error(ErrorTypes.EntityNotFound);
  };
}