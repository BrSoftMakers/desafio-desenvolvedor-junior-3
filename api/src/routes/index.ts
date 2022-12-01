import { Router } from "express";
import { userLogin, userRoutes } from "./user";
import { postRoutes } from "./post";

export const router = Router()
router.use("/register",userRoutes)
router.use("/login",userLogin)
router.use("/posts",postRoutes)