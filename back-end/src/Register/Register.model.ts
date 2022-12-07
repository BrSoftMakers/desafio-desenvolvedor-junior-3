import prisma from "../lib/PrismaClient";
import CustomError from "../middlewares/Error/customError";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../middlewares/Error/ErrorConstructor";

const handleRegister = async (email: string, password: string, name: string) => {
  const isEmailAlreadyRegistered = await prisma.users.findUnique({
    where: {
      email
    }
  })
  if(!isEmailAlreadyRegistered) {
    const user = await prisma.users.create({
      data: {
        name,
        email,
        password,
      },
    });
    return user
  }
  return null
}

export default {
  handleRegister
};
