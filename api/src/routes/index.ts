import { Router } from "express";
import { userRoutes } from "./user";

export const router = Router()
router.use("/register",userRoutes)