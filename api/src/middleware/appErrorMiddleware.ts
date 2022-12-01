import { Request, Response, NextFunction } from "express";
import AppError from "../errors/appError";

export const appErrorMiddleware = (
  err: Error,
  request: Request,
  response: Response,
  _: NextFunction
) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    message: "Internal Server Error",
  });
};