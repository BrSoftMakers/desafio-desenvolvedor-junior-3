import RegisterController from "./Register.controller";
import { Router } from "express";
import { isBodyKeysEmpty } from "../middlewares/Validations/isBodyKeysEmpty";

const router = Router();

router.post(
  "/",
  isBodyKeysEmpty,
  RegisterController.handleRegister
);

export default router;
