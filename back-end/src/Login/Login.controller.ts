import { NextFunction, Request, Response } from "express";
import LoginService from "./Login.service";

const handleLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const tokenAndUser = await LoginService.handleLogin(email, password);
    return res.status(200).json(tokenAndUser);
  } catch (error) {
    next(error);
  }
};

export default {
  handleLogin
};
