import express, { Express } from "express";
import cors from "cors";

const App: Express = express();

App.use(express.json());
App.use(cors());
App.use('/', (req, res) => { res.send('Hello World!') });

export default App;
