import { verify } from 'jsonwebtoken';
import CustomError from '../../middlewares/Error/customError';
import { UNAUTHORIZED } from '../../middlewares/Error/ErrorConstructor';
import { JWT_SECRET } from '../constants';

const isTokenValid = (token: string) => {
  try {
    const decoded = verify(token, JWT_SECRET);
    return decoded;
  }
  catch (err) {
    throw new CustomError('Invalid token', UNAUTHORIZED.statusCode);
  }
}

export default isTokenValid;
