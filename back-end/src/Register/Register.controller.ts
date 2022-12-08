import { NextFunction, Request, Response } from "express";
import RegisterService from "./Register.service";
import { RegisterParams } from "../lib/Types/register";

const handleRegister = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, name } = req.body;
    const newUserAndToken = await RegisterService.handleRegister({ email, password, name } as RegisterParams);
    return res.status(201).json(newUserAndToken);
  }
  catch (err) {
    next(err);
  }
}

export default {
  handleRegister
};
