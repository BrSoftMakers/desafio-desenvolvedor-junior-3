import { Request,Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import "dotenv/config"
    
    export const authUser = (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization?.split(' ')[1]
  
  try {
    jwt.verify(
      token as string,
      process.env.JWT_SECRET as string,
      (error: any, decoded: any) => {
        
        req.userPayload = { userEmail: decoded.email}
        next()
      }
    )
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' })
  }
    }