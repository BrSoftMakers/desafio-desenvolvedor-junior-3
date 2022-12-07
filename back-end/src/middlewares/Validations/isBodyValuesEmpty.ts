import { NextFunction, Request, Response } from "express";
import CustomError from "../Error/customError";
import { BAD_REQUEST } from "../Error/ErrorConstructor";

export const isBodyValuesEmpty = (req: Request, res: Response, next: NextFunction) => {
  const values = Object.values(req.body)
  const isLengthEqualZero = values.length === 0
  const isValuesAnArray = Array.isArray(values)
  const isValuesDifferentThanEmptyString = values.every(value => value !== "")
  let ErrorCatcher: CustomError | undefined;
  if (isLengthEqualZero || !isValuesAnArray || !isValuesDifferentThanEmptyString) {
    ErrorCatcher =  new CustomError("Body values are empty, please fill with correct data", BAD_REQUEST.statusCode);
  }
  if (ErrorCatcher) {
    return next(ErrorCatcher);
  }
  return next();
}
