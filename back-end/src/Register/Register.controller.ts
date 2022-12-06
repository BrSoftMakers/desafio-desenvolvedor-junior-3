import { Request, Response } from "express";
import RegisterService from "./Register.service";

const handleRegister = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;
    const user = await RegisterService.handleRegister(email, password, name);
    if (!user) { return res.status(400).json({ message: "Invalid data" }); }
    return res.status(200).json(user);
  }
  catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

export default {
  handleRegister
};