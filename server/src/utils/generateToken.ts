import jwt, { SignOptions } from 'jsonwebtoken';
import IUser from '../interfaces/IUser';

const SECRET = process.env.JWT_SECRET || 'jwt_secret';

const jwtConfig: SignOptions = {
  expiresIn: '24h',
  algorithm: 'HS256',
};

const generateToken = (payload: IUser): string => (
  jwt.sign(payload, SECRET, jwtConfig)
);

export default generateToken;