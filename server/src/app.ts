import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';
import router from './routes';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config():void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(router);
    this.app.use(errorHandler);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}