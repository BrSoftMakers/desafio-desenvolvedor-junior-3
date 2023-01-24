import { Router } from "express";

import {isAuth} from "./middlewares/isAuth"

import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DetailUserController } from "./controllers/user/DetailUserController"
import { CreatePostController } from "./controllers/post/CreatePostController";
import { ListPostsDescController } from "./controllers/post/ListPostsDescController";
import { ListPostsAscController } from "./controllers/post/ListPostsAscController";
import { ListByUserController } from "./controllers/post/ListByUserController";
import { DetailPostController } from "./controllers/post/DetailPostController";
import { UpdatePostController } from "./controllers/post/UpdatePostController";
import { RemovePostController } from "./controllers/post/RemovePostController";

const router = Router();

//--ROTAS USER
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuth, new DetailUserController().handle)

//--ROTA POSTS
router.post('/post', isAuth, new CreatePostController().handle)
router.get('/post/desc', isAuth, new ListPostsDescController().handle)
router.get('/post/asc', isAuth, new ListPostsAscController().handle)
router.get('/post/me', isAuth, new ListByUserController().handle)
router.get('/post', isAuth, new DetailPostController().handle)
router.put('/post/update', isAuth, new UpdatePostController().handle)
router.delete('/post/remove', isAuth, new RemovePostController().handle)

export {router};