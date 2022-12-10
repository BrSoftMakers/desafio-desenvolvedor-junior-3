// model
import LoginModel from './Login.model';
import { LoginParams } from '../lib/Types/login';
// helpers
import tokenGenerator from '../utils/tokenGenerator';
// validations
import isEncryptedPasswordValid from '../Validations/handleLogin/isEncryptedPasswordValid';
// custom error class
import CustomError from '../middlewares/Error/customError';


const handleLogin = async ({ email, password }: LoginParams) => {

  const user = await LoginModel.handleLogin({ email, password });

  const isPasswordAccepted = await isEncryptedPasswordValid(password, user.password);
  if (!isPasswordAccepted) throw new CustomError('user not found', 401);
  const token = tokenGenerator({ id: user.id, email: user.email, name: user.name });
  return { token, user };
}

export default {
  handleLogin
};
