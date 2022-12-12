import { PostParams, updatePostParams } from "../lib/Types/post";
import CustomError from "../middlewares/Error/customError";
import { NOT_FOUND } from "../middlewares/Error/ErrorConstructor";
import { tokenDecoder } from "../utils/decoded";
import isContentValid from "../Validations/handlePost/isContentValid";
import isTitleValid from "../Validations/handlePost/isTitleValid";
import PostsModels from "./Posts.models";

const getPosts = async (orderByFilter: string) => {
  const posts = await PostsModels.getPosts(orderByFilter);  
  return posts;
}

const getPostByUserId = async (id: string) => {
  const posts = await PostsModels.getPostByUserId(id);
  if(!posts) throw new CustomError(`Posts with user id ${id} not found`, NOT_FOUND.statusCode);
  return posts;
}

const getPostById = async (id: string) => {
  const post = await PostsModels.getPostById(id);
  if(!post) throw new CustomError(`Post with id ${id} not found`, NOT_FOUND.statusCode);
  return post;
}

const createPost = async (input: PostParams, token: string | undefined) => {
  const decoded = tokenDecoder(token || "") as { payload: string, email: string, name: string };
  const payload = decoded.payload as unknown as { id: string, email: string, name: string}
  const authorId = payload.id;
  const authorEmail = payload.email;
  const authorName = payload.name;

  const createParams = { ...input, authorId, authorEmail, authorName };
  const post = await PostsModels.createPost(createParams);
  return post;
}

const updatePost = async ({ id, data }: updatePostParams) => {
  if(!data) throw new CustomError("Data is not valid", NOT_FOUND.statusCode);
  if(data) {
    if(data.title) {
      const isTitleValidated =  isTitleValid(data.title);
      if(!isTitleValidated) throw new CustomError("Title is not valid", NOT_FOUND.statusCode);
    }
    if(data.content) {
      const isContentValidated =  isContentValid(data.content);
      if(!isContentValidated) throw new CustomError("Content is not valid", NOT_FOUND.statusCode);
    }
  }
  const post = await PostsModels.updatePost({ id, data });
  if(!post) throw new CustomError(`Post with id ${id} not found`, NOT_FOUND.statusCode);
  return post;
}

const deletePost = async (id: string) => await PostsModels.deletePost(id);


export default {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  getPostByUserId
};
