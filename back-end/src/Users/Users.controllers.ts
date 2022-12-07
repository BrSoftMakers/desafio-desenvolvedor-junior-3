import UsersServices from "./Users.services";
import { NextFunction, Request, Response } from "express";

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

export default {
  getUsers,
  getUserById
};
