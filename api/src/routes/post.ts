import { Router } from "express";
import { postCreateController } from "../controller/post.controller";
import { authUser } from "../middleware/authUser.middleware";


export const postRoutes = Router()


postRoutes.post("/",authUser,postCreateController)
