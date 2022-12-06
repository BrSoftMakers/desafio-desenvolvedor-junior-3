import prisma from "../lib/PrismaClient";

const handleLogin = async (email: string, password: string) => {
  const user = await prisma.users.findUnique({
    where: {
      email,
    },
  });
  // if (!user) {
  //   return null;
  // }
  // const validPassword = await bcrypt.compare(password, user.password);
  // if (!validPassword) {
  //   return null;
  // }
  // const token = tokenGenerator(user.id);
  return user;
}

export default {
  handleLogin
};
