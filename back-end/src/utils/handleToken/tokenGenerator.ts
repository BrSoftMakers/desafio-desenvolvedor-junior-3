import { sign } from 'jsonwebtoken';
import { JWT_SECRET } from '../constants';

const tokenGenerator = (dataYourCouldNeed: any) => {
  const token = sign(dataYourCouldNeed, JWT_SECRET, { expiresIn: '240h' });
  return token;
}

export default tokenGenerator;
