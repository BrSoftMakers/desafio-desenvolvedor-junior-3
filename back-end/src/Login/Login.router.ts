import LoginController from "./Login.controller";
import { Router } from "express";
import { isBodyKeysEmpty } from "../middlewares/Validations/isBodyKeysEmpty";

const router = Router();


router.post(
  "/login",
  isBodyKeysEmpty,
  LoginController.handleLogin
);

export default router;
