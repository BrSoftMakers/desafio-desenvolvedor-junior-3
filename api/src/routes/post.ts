import { Router } from "express";
import { postCreateController, postListController, postListOneController, postDeleteController, postUpdateController } from "../controller/post.controller";
import { authUser } from "../middleware/authUser.middleware";
import { validate } from "../middleware/validatedMiddleware";
import { postCreateSchema, postupdateSchema } from "../schemas/postSchema";

export const postRoutes = Router()


postRoutes.post("/",validate(postCreateSchema),authUser,postCreateController)
postRoutes.get("/",authUser,postListController)
postRoutes.get("/:id",authUser,postListOneController)
postRoutes.delete("/:id",authUser,postDeleteController)
postRoutes.put("/:id",validate(postupdateSchema),authUser,postUpdateController)