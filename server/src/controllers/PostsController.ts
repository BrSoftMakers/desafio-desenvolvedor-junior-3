import { Request, Response } from 'express';
import PostsService from '../services/PostsService';

export default class PostsController {
  private service: PostsService;
  
  constructor() {
    this.service = new PostsService();
  }
  
  public create = async (req: Request, res: Response) => {
    const userId = res.locals.user.id;
    const response = await this.service.create(userId, req.body); 
    return res.status(201).json(response);
  };
  
  public read = async (req: Request, res: Response) => {
    const { orderByAsc, filterByUser } = req.query;
    if (filterByUser) {
      const userId = res.locals.user.id;
      const response = await this.service.readByUser(!!orderByAsc, userId); 
      return res.status(200).json(response);
    }
    const response = await this.service.read(!!orderByAsc); 
    return res.status(200).json(response);
  };

  public readOne = async (req: Request, res: Response) => {
    const { id } = req.params;
    const response = await this.service.readOne(Number(id)); 
    return res.status(200).json(response);
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.service.delete(Number(id)); 
    return res.sendStatus(204);
  };
}