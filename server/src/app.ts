import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';
import routes from './routes';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config():void {
    this.app.use(cors());
    this.app.use(express.json({ limit: '50mb' }));
    this.app.use(express
      .urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
    this.app.use(routes);
    this.app.use(errorHandler);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}