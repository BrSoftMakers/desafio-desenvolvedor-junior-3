import express, { Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.app.get('/', (_req: Request, res: Response) => res.json({ ok: true }));
  }

  private config():void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}