import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  private service: UserService;
  
  constructor() {
    this.service = new UserService();
  }
  
  public create = async (req: Request, res: Response) => {
    const response = await this.service.createUser(req.body);
    return res.status(201).json(response);
  };
  public find = async (req: Request, res: Response) => {
    const response = await this.service.findUser(req.body);
    return res.status(200).json(response);
  };
  public validate = async (_req: Request, res: Response) => {
    const { user } = res.locals;
    return res.status(200).json({ id: user.id, role: user.role });
  };
}