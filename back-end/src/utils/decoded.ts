import Jwt from 'jsonwebtoken';
import { JWT_SECRET } from './constants';

export const tokenDecoder = (token: string) => {
  const decoded = Jwt.verify(token, JWT_SECRET);
  return decoded;
}
