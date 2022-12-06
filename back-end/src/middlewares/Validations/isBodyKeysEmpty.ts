import { NextFunction, Request, Response } from "express";
import CustomError from "../Error/customError";

export const isBodyKeysEmpty = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = req;
    const keys = Object.keys(body);
    const isEmpty = keys.every((key) => body[key] === "");
    if (isEmpty) {
      throw new CustomError("All fields are required", 400);
    }
    next();
  } catch (error) {
    next(error);
  }
}
