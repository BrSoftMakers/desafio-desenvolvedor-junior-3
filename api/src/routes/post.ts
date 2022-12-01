import { Router } from "express";
import { postCreateController, postListController, postListOneController, postDeleteController, postUpdateController } from "../controller/post.controller";
import { authUser } from "../middleware/authUser.middleware";


export const postRoutes = Router()


postRoutes.post("/",authUser,postCreateController)
postRoutes.get("/",authUser,postListController)
postRoutes.get("/:id",authUser,postListOneController)
postRoutes.delete("/:id",authUser,postDeleteController)
postRoutes.put("/:id",authUser,postUpdateController)