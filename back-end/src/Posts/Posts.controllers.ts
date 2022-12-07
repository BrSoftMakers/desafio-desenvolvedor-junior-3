import PostsServices from "./Posts.services";
import { Request, Response, NextFunction } from "express";

const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orderByFilter = req.query.orderBy
    const posts = await PostsServices.getPosts(orderByFilter as string);
    return res.status(200).json({ posts });
  } catch (err) {
    next(err);
  }
}

const getPostById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const post = await PostsServices.getPostById(id);
    return res.status(200).json({ post });
  } catch (err) {
    next(err);
  }
}

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, content, authorId } = req.body;
    const post = await PostsServices.createPost(title, content, authorId);

    return res.status(201).json({ post });
  } catch (err) {
    next(err);
  }
}

export default {
  getPosts,
  getPostById,
  createPost,
};
