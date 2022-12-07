// model
import LoginModel from './Login.model';
// helpers
import tokenGenerator from '../utils/handleToken/tokenGenerator';
// validations
import isEncryptedPasswordValid from '../utils/handleLogin/isEncryptedPasswordValid';
import isPasswordValid from '../utils/handleRegister/isPasswordValid';
import isEmailValid from '../utils/handleRegister/isEmailValid';
// custom error class
import CustomError from '../middlewares/Error/customError';

const handleLogin = async (email: string, password: string) => {
  
// validate email and password with domain rules
  const isEmailValidated = isEmailValid(email);
  if (!isEmailValidated) throw new CustomError('Email is not valid', 400);
  const isPasswordValidated = isPasswordValid(password);
  if (!isPasswordValidated) throw new CustomError('Password is not valid', 400);
// call my model to validate the user
  const user = await LoginModel.handleLogin(email, password);
// compare password retrieved by login model with the password provided by the user in front-end
  const isPasswordAccepted = await isEncryptedPasswordValid(password, user.password);
  if (!isPasswordAccepted) throw new CustomError('user not found', 401);
// generate token
  const token = tokenGenerator(user.id);
  return { token, user };
}

export default {
  handleLogin
};
