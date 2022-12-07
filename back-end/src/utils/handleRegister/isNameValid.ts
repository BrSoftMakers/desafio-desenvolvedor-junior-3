import { NAME_REGEX } from "../constants";

const isNameValid = (name: string) => {
  return NAME_REGEX.test(name);
}

export default isNameValid;
