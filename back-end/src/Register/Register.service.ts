// model
import RegisterModel from "./Register.model";
// helpers
import tokenGenerator from "../utils/tokenGenerator";
// validations
import isEmailValid from "../Validations/handleRegister/isEmailValid";
import isNameValid from "../Validations/handleRegister/isNameValid";
import isPasswordValid from "../Validations/handleRegister/isPasswordValid";
import passwordEncrypter from "../Validations/handleRegister/passwordEncrypter";
// custom error class
import CustomError from "../middlewares/Error/customError";
import { RegisterParams } from "../lib/Types/register";

const handleRegister = async ({ email, password, name }: RegisterParams) => {
  // validate name, email, password domain rules
  const isNameValidated = isNameValid(name);
  if (!isNameValidated) throw new CustomError("Name is not valid", 400);
  const isEmailValidated = isEmailValid(email);
  if (!isEmailValidated) throw new CustomError("Email is not valid", 400);
  const isPasswordValidated = isPasswordValid(password);
  if (!isPasswordValidated) throw new CustomError("Password is not valid", 400);
  // encrypt password
  const hashedPassword = await passwordEncrypter(password);
  // call my model to register the user with the encrypted password
  
  const newUser = await RegisterModel.handleRegister({ email, password: hashedPassword, name });
  // generate token
  console.log(newUser);
  
  const token = tokenGenerator({ id: newUser.id, email: newUser.email, name: newUser.name });
  return { token, newUser };
}

export default {
  handleRegister
};
