import { Request, Response } from "express";
import LoginService from "./Login.service";

const handleLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = await LoginService.handleLogin(email, password);
  if(!token) {
    return res.status(400).json({ message: "Invalid email or password" });
  }
  return res.status(200).json(token);
};

export default {
  handleLogin
};
