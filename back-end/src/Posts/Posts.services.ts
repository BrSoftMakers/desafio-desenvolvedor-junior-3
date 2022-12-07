import { Request } from "express";
import CustomError from "../middlewares/Error/customError";
import { NOT_FOUND } from "../middlewares/Error/ErrorConstructor";
import isContentValid from "../Validations/handlePost/isContentValid";
import isTitleValid from "../Validations/handlePost/isTitleValid";
import PostsModels from "./Posts.models";

const getPosts = async (orderByFilter: string) => {
  const posts = await PostsModels.getPosts(orderByFilter);
  return posts;
}

const getPostById = async (id: string) => {
  const post = await PostsModels.getPostById(id);
  if(!post) throw new CustomError(`Post with id ${id} not found`, NOT_FOUND.statusCode);
  return post;
}

const createPost = async (title: string, content:string, authorId: string) => {
  const isTitleValidated =  isTitleValid(title);
  if(!isTitleValidated) throw new CustomError("Title is not valid", NOT_FOUND.statusCode);
  const isContentValidated =  isContentValid(content);
  if(!isContentValidated) throw new CustomError("Content is not valid", NOT_FOUND.statusCode);
  const post = await PostsModels.createPost( title, content, authorId );
  return post;
}

export default {
  getPosts,
  getPostById,
  createPost,
};
