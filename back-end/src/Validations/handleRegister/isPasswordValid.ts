import { PASSWORD_REGEX } from "../../utils/constants";

const isPasswordValid = (password: string) => {
  return PASSWORD_REGEX.test(password);
}

export default isPasswordValid;
