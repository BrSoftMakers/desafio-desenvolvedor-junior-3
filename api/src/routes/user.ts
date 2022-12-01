import { Router } from "express";
import { userCreateController, userLoginController } from "../controller/user.controller";


export const userRoutes = Router()
export const userLogin = Router()

userRoutes.post("/",userCreateController)
userLogin.post("/",userLoginController)