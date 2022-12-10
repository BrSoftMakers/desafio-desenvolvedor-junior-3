import UsersControllers from "./Users.controllers";
import { Router } from "express";

const router = Router();

router.get("/", UsersControllers.getUsers);
router.get("/:id", UsersControllers.getUserById);
router.post("/token", UsersControllers.getUserByToken);

export default router;
