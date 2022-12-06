import express, { Express } from "express";
import cors from "cors";
import loginRouter from "./Login/Login.router";
import RegisterRouter from "./Register/Register.router";

const App: Express = express();

App.use(express.json());
App.use(cors());
App.use("/login", loginRouter);
App.use("/register", RegisterRouter);

export default App;
