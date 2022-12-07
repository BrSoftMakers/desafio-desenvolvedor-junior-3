import prisma from "../lib/PrismaClient";
import CustomError from "../middlewares/Error/customError";
import { UNAUTHORIZED } from "../middlewares/Error/ErrorConstructor";

const handleLogin = async (email: string, password: string) => {
  const user = await prisma.users.findUnique({ where: { email } });  
  if (!user) throw new CustomError("User not found", UNAUTHORIZED.statusCode);
  return user;
}

export default {
  handleLogin
};
