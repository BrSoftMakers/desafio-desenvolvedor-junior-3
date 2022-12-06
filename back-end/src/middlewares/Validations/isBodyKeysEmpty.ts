import { NextFunction, Request, Response } from "express";
import CustomError from "../Error/customError";
import { BAD_REQUEST } from "../Error/ErrorConstructor";

export const isBodyKeysEmpty = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = req;
    const keys = Object.keys(body);
    const isEmpty = keys.every((key) => body[key] === "");
    if (isEmpty) {
      throw new CustomError(BAD_REQUEST.message, BAD_REQUEST.statusCode);
    }
    next();
  } catch (error) {
    next(error);
  }
}
