import LoginController from "./Login.controller";
import { Router } from "express";
import { isBodyKeysEmpty } from "../middlewares/Validations/isBodyKeysEmpty";
import { isBodyValuesEmpty } from "../middlewares/Validations/isBodyValuesEmpty";

const router = Router();


router.post(
  "/",
  isBodyKeysEmpty,
  isBodyValuesEmpty,
  LoginController.handleLogin
);

export default router;
