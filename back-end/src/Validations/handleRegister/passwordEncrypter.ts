import bcrypt from "bcrypt";
import { SALT_ROUNDS } from "../../utils/constants";

const passwordEncrypter = async (password: string) => {
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  return hashedPassword;
}

export default passwordEncrypter;
