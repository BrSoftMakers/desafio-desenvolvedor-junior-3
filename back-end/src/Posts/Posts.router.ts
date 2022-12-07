import PostsControllers from "./Posts.controllers";
import { isBodyKeysEmpty } from "../middlewares/Validations/isBodyKeysEmpty";
import { isBodyValuesEmpty } from "../middlewares/Validations/isBodyValuesEmpty";
import { Router } from "express";

const postValidations = [isBodyKeysEmpty, isBodyValuesEmpty];

const router = Router();

router.get("/", PostsControllers.getPosts);
router.get("/:id", PostsControllers.getPostById);
router.post("/", postValidations, PostsControllers.createPost);

export default router;
