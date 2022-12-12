import { NAME_REGEX } from "../../utils/constants";

const isNameValid = (name: string) => {
  return NAME_REGEX.test(name);
}

export default isNameValid;
