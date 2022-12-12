import prisma from "../lib/PrismaClient";
import { RegisterParams } from "../lib/Types/register";
import CustomError from "../middlewares/Error/customError";
import { CONFLICT } from "../middlewares/Error/ErrorConstructor";

const handleRegister = async ({ email, password: hashedPassword, name }: RegisterParams) => {
  
  const isEmailAlreadyRegistered = await prisma.users.findUnique({ where: { email } });
  
  if(isEmailAlreadyRegistered) throw new CustomError("Email already registered", CONFLICT.statusCode);
  const newUser = await prisma.users.create({ data: { email, password: hashedPassword, name } });
  
  return newUser;
}

export default {
  handleRegister
};
