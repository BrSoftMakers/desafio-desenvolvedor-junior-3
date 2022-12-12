import UsersServices from "./Users.services";
import { NextFunction, Request, Response } from "express";
import { JWT_SECRET } from "../utils/constants";
import { verify } from "jsonwebtoken";

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UsersServices.getUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
}

const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = await UsersServices.getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

const getUserByToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    const decoded = verify(authorization as string, JWT_SECRET);
    res.status(200).json(decoded);
  } catch (error) {
    next(error);
  }
}

export default {
  getUsers,
  getUserById,
  getUserByToken
};
