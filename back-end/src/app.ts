import express, { Express } from "express";
import cors from "cors";
import loginRouter from "./Login/Login.router";
import RegisterRouter from "./Register/Register.router";
import UsersRouter from "./Users/Users.router";
import postRouter from "./Posts/Posts.router";
import { errorMiddleware } from "./middlewares/Error/customError";
import isTokenValid from "./middlewares/Validations/isTokenValid";
import pingRouter from "./ping";

const App: Express = express();

App.use(cors());
App.use(express.json());
App.use("/login", loginRouter);
App.use("/register", RegisterRouter);
App.use("/users", isTokenValid, UsersRouter);
App.use("/posts", isTokenValid, postRouter);
App.use("/ping", pingRouter);
App.use(errorMiddleware);

export default App;
