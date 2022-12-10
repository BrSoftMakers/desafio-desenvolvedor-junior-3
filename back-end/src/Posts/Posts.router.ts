import PostsControllers from "./Posts.controllers";
import { isBodyKeysEmpty } from "../middlewares/Validations/isBodyKeysEmpty";
import { isBodyValuesEmpty } from "../middlewares/Validations/isBodyValuesEmpty";
import { Router } from "express";

const bodyValidations = [isBodyKeysEmpty, isBodyValuesEmpty];

const router = Router();

router.get("/", PostsControllers.getPosts);
router.get("/:id", PostsControllers.getPostById);
router.post("/", bodyValidations, PostsControllers.createPost);
router.put("/:id", bodyValidations, PostsControllers.updatePost);
router.delete("/:id", PostsControllers.deletePost);
router.get("/user/:id", PostsControllers.getPostByUserId);

export default router;
