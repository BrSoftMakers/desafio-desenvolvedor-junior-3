import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';
import { ErrorTypes } from '../errors/catalog';

const schema = Joi.object({
  username: Joi.string().min(3).required(),
  password: Joi.string().min(8).required(),
  name: Joi.string().min(2),
});

const inputValidator = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);
  
  if (!error) return next();

  throw new Error(ErrorTypes.InvalidEntity);
};

export default inputValidator;
