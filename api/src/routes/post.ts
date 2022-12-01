import { Router } from "express";
import { postCreateController, postListController } from "../controller/post.controller";
import { authUser } from "../middleware/authUser.middleware";


export const postRoutes = Router()


postRoutes.post("/",authUser,postCreateController)
postRoutes.get("/",authUser,postListController)