import prisma from "../lib/PrismaClient";
import { LoginParams } from "../lib/Types/login";
import CustomError from "../middlewares/Error/customError";
import { UNAUTHORIZED } from "../middlewares/Error/ErrorConstructor";

const handleLogin = async ({ email }: LoginParams) => {
  const user = await prisma.users.findUnique({ where: { email } });  
  if (!user) throw new CustomError("User not found", UNAUTHORIZED.statusCode);
  return user;
}

export default {
  handleLogin
};
