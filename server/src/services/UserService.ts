import md5 from 'md5';
import prisma from '../database/prisma';
import { ErrorTypes } from '../errors/catalog';
import ILoginInput from '../interfaces/ILoginInput';
import IRegisterInput from '../interfaces/IRegisterInput';
import IUser from '../interfaces/IUser';

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

    if (user.password === md5(password)) {
      return user;
      // { username: user.username, name: user.name, role: user.role };
    } throw new Error(ErrorTypes.EntityNotFound);
  };
  private checkPassword = (password: string) => {
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
    if (!regex.test(password)) throw new Error(ErrorTypes.InvalidEntity);
    return regex.test(password); 
  };
  private checkUsername = async (username: string) => {
    const nameAlreadyRegistered = await this.getUserByUsername(username);
    if (nameAlreadyRegistered) throw new Error(ErrorTypes.UsernameInvalid);
    return true;
  };
  public createUser = async (
    { username, password, name }: IRegisterInput,
  ) => {
    if (this.checkPassword(password) && await this.checkUsername(username)) {
      const user:IUser = await prisma.user.create({ data: {
        username,
        password: md5(password),
        name,
      },
      });
      return user;
    }
  };
}