import RegisterController from "./Register.controller";
import { Router } from "express";

const router = Router();

router.post("/", RegisterController.handleRegister);

export default router;
