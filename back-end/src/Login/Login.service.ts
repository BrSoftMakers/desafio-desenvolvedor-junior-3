import LoginModel from './Login.model';
// import { tokenGenerator, loginValidation } from '../../utils';

const handleLogin = async (email: string, password: string) => {
  const user = await LoginModel.handleLogin(email, password);
  if (!user) {
    return null;
  }
  // const token = tokenGenerator(user.id);
  return user;
}

export default {
  handleLogin
};