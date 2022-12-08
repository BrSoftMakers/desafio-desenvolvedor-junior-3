import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../utils/constants';

const isTokenValid = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    (<any>req).decoded = decoded;
    next();
  }
  catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

export default isTokenValid;
