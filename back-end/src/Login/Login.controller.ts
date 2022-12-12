import { NextFunction, Request, Response } from "express";
import LoginService from "./Login.service";
import { LoginParams } from "../lib/Types/login";

const handleLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const tokenAndUser = await LoginService.handleLogin({ email, password } as LoginParams);
    return res.status(200).json(tokenAndUser);
  } catch (error) {
    next(error);
  }
};

export default {
  handleLogin
};
