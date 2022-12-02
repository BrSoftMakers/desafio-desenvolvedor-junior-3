import { Router } from "express";
import { userCreateController, userLoginController,userListOneController } from "../controller/user.controller";
import { validate } from "../middleware/validatedMiddleware";
import { userCreateSchema, userLoginSchema } from "../schemas/userSchema";


export const userRoutes = Router()
export const userLogin = Router()

userRoutes.post("/",validate(userCreateSchema),userCreateController)
userLogin.post("/",validate(userLoginSchema),userLoginController)
userRoutes.get("/:id",userListOneController)