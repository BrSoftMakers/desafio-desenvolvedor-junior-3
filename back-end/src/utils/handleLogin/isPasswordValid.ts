import bcrypt from 'bcrypt';

const isPasswordValid = async (password: string, hashedPassword: string) => {
  const validPassword = await bcrypt.compare(password, hashedPassword);
  return validPassword;
}

export default isPasswordValid;

