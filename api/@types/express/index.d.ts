import * as express from 'express'

declare global {
  namespace Express {
    interface Request {
      inputData: any
      userPayload: any
      pagination: any
    }
  }
}