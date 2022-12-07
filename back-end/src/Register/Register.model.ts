import prisma from "../lib/PrismaClient";
import CustomError from "../middlewares/Error/customError";
import { CONFLICT } from "../middlewares/Error/ErrorConstructor";

const handleRegister = async (email: string, password: string, name: string) => {
  const isEmailAlreadyRegistered = await prisma.users.findUnique({ where: { email } })
  if(isEmailAlreadyRegistered) throw new CustomError("Email already registered", CONFLICT.statusCode);
  const newUser = await prisma.users.create({ data: { email, password, name } });
  return newUser;
}

export default {
  handleRegister
};
