import RegisterModel from "./Register.model";
// import { tokenGenerator } from "../../utils";

const handleRegister = async (email: string, password: string, name: string) => {
  const user = await RegisterModel.handleRegister(email, password, name);
  // const token = tokenGenerator(user.id);
  return user;
}

export default {
  handleRegister
};
