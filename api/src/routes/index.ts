import { Router } from "express";
import { userLogin, userRoutes } from "./user";
import { userLoginController } from "../controller/user.controller";

export const router = Router()
router.use("/register",userRoutes)
router.use("/login",userLogin)