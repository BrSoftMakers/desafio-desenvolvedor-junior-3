import { PASSWORD_REGEX } from "../constants";

const isPasswordValid = (password: string) => {
  return PASSWORD_REGEX.test(password);
}

export default isPasswordValid;
