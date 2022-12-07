import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../utils/constants';

const isTokenValid = (req: any, res: any, next: any) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  }
  catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
}

export default isTokenValid;
