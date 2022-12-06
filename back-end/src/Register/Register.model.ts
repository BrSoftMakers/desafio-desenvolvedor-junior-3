import prisma from "../lib/PrismaClient";

const handleRegister = async (email: string, password: string, name: string) => {
  const isEmailAlreadyRegistered = await prisma.users.findUnique({
    where: {
      email
    }
  })
  console.log(isEmailAlreadyRegistered);
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
