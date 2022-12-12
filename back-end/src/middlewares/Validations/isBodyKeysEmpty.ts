import { NextFunction, Request, Response } from "express";
import CustomError from "../Error/customError";
import { BAD_REQUEST } from "../Error/ErrorConstructor";

export const isBodyKeysEmpty = (req: Request, _res: Response, next: NextFunction) => {
  const keys = Object.keys(req.body);
  const isLengthEqualZero = keys.length === 0
  const isKeysAnArray = Array.isArray(keys)
  const isKeysDifferentThanEmptyString = keys.every(key => key !== "")
  let ErrorCatcher: CustomError | undefined;
  if (isLengthEqualZero || !isKeysAnArray || !isKeysDifferentThanEmptyString) {
    ErrorCatcher =  new CustomError("Body keys are empty, please fill with correct data", BAD_REQUEST.statusCode);
  }
  if (ErrorCatcher) {
    return next(ErrorCatcher);
  }
  return next();
};
