import express, { Express } from "express";
import cors from "cors";
import loginRouter from "./Login/Login.router";
import RegisterRouter from "./Register/Register.router";
import { errorMiddleware } from "./middlewares/Error/customError";

const App: Express = express();

App.use(express.json());
App.use(cors());
App.use("/login", loginRouter);
App.use("/register", RegisterRouter);
App.use(errorMiddleware);

export default App;
