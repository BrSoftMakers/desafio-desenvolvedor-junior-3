import LoginController from "./Login.controller";
import { Router } from "express";

const router = Router();

router.post("/", LoginController.handleLogin);

export default router;
