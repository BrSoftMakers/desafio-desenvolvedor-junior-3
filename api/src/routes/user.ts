import { Router } from "express";
import { userCreateController } from "../controller/user.controller";

export const userRoutes = Router()

userRoutes.post("/",userCreateController)