import { EMAIL_REGEX } from "../constants";

const isEmailValid = (email: string) => {
  return EMAIL_REGEX.test(email);
}

export default isEmailValid;
