import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ErrorTypes } from '../errors/catalog';
import IUser from '../interfaces/IUser';

const SECRET = process.env.JWT_SECRET || 'jwt_secret';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization || '';

  if (!token) throw new Error(ErrorTypes.TokenNotFound);

  try {
    const payload = jwt.verify(token, SECRET) as IUser;
    res.locals.user = payload;
    next();
  } catch (err) {
    throw new Error(ErrorTypes.TokenNotFound);
  }
};

export default validateToken;