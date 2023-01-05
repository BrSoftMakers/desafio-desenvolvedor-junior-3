import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';
import { ErrorTypes } from '../errors/catalog';

const schema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  subtitle: Joi.string(),
  thumbnail: Joi.any(),
});

const inputValidator = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);
  
  if (!error) return next();

  throw new Error(ErrorTypes.InvalidEntity);
};

export default inputValidator;
