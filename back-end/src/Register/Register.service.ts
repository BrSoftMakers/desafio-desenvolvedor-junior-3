import RegisterModel from "./Register.model";
// import { tokenGenerator } from "../../utils";

const handleRegister = async (email: string, password: string, name: string) => {
  const isEmailValid = email.includes("@");
  if (!email || !password || !name) {
    return null;
  }
  if (!isEmailValid) {
    return null;
  }
  const user = await RegisterModel.handleRegister(email, password, name);
  // const token = tokenGenerator(user.id);
  return user;
}

export default {
  handleRegister
};
