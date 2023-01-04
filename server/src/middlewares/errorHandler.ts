import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ErrorTypes, errorCatalog } from '../errors/catalog';

const errorHandler: ErrorRequestHandler = ( 
  err: Error, 
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const messageAsErrorType = err.message as keyof typeof ErrorTypes;
  const mappedError = errorCatalog[messageAsErrorType];
  if (mappedError) {
    const { httpStatus, message } = mappedError;
    return res.status(httpStatus).json({ message });
  }
  console.error(err);
  return res.status(500).json({ message: err.message });
};

export default errorHandler;