import PostsServices from "./Posts.services";
import { Request, Response, NextFunction } from "express";
import { PostParams } from "../lib/Types/post";

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
    const post = await PostsServices.createPost({ title, content, authorId } as PostParams);
    return res.status(201).json({ post });
  } catch (err) {
    next(err);
  }
}

const updatePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const post = await PostsServices.updatePost({ id, data: req.body });
    return res.status(200).json({ post });
  } catch (err) {
    next(err);
  }
}

const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await PostsServices.deletePost(id);
    return res.status(204).end();
  } catch (err) {
    next(err);
  }
}

export default {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};
