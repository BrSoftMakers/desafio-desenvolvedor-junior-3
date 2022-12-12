import { NextFunction, Request, Response } from "express";

class CustomError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default CustomError;

export const errorMiddleware = (err: CustomError | Error, req: Request, res: Response, next: NextFunction) => {
  try {    
    if (err instanceof CustomError) {
      return res.status(err.statusCode).json(err.message);
    } else if (err instanceof Error) {
      return res.status(500).json({
        helper: 'this error was not handled',
        instanceof: err.constructor.name,
        message: err.message,
        stack: err.stack
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error, please try again later' });
  }
};
