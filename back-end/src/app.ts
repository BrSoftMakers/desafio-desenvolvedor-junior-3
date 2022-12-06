import express, { Express } from "express";
import cors from "cors";
import loginRouter from "./Login/Login.router";

const App: Express = express();

App.use(express.json());
App.use(cors());
App.use('/', (req, res) => { res.send('Hello World!') });
App.use("/login", loginRouter);

export default App;
