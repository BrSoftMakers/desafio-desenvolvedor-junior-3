import { Request, Response, NextFunction } from 'express'
import * as yup from 'yup'
import  AppError  from '../errors/appError'

export const validate =
  (schema: yup.AnyObjectSchema) =>
  async (request: Request, response: Response, next: NextFunction) => {
    const body = request.body

    try {
      const data = await schema.validate(body, {
        abortEarly: false,
        stripUnknown: true,
      })
      request.inputData = data

      next()
    } catch (e) {
      next(new AppError((e as any).errors, (e as any).statusCode))
    }
  }