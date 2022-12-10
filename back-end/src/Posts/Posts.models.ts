import prisma from "../lib/PrismaClient";
import { PostParams, updatePostParams } from "../lib/Types/post";
import CustomError from "../middlewares/Error/customError";
import { BAD_REQUEST } from "../middlewares/Error/ErrorConstructor";

const getPosts = async (orderByFilter: string) => {
  const orderBy = orderByFilter === 'desc' ? 'desc' : 'asc';  
  const orderedPosts = await prisma.posts.findMany({ orderBy: { createdAt: orderBy } });
  return orderedPosts;
}

const getPostByUserId = async (id: string) => {
  const posts = await prisma.posts.findMany({ where: { authorId: id } });
  if(!posts) throw new CustomError(`Posts with user id ${id} not found`, BAD_REQUEST.statusCode);
  return posts;
}

const getPostById = async (id: string) => {
  const post = await prisma.posts.findUnique({ where: { id } });
  if(!post) throw new CustomError(`Post with id ${id} not found`, BAD_REQUEST.statusCode);
  return post;
}

const createPost = async (input: PostParams) => {
  const isAuthorValid = await prisma.users.findUnique({ where: { id: input.authorId } });
  if(!isAuthorValid) throw new CustomError(`User/author with id ${input.authorId} not found`, BAD_REQUEST.statusCode);
  const post = await prisma.posts.create({ data: input })
  return post;
}

const updatePost = async ({ id, data }: updatePostParams) => {
  const post = await prisma.posts.update({ where: { id }, data });
  if(!post) throw new CustomError(`Post with id ${id} not found`, BAD_REQUEST.statusCode);
  return post;
}

const deletePost = async (id: string) => {
  const isPostValid = await prisma.posts.findUnique({ where: { id } });
  if(!isPostValid) throw new CustomError(`Post with id ${id} not found`, BAD_REQUEST.statusCode);
  return await prisma.posts.delete({ where: { id } });
}


export default {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  getPostByUserId
};
