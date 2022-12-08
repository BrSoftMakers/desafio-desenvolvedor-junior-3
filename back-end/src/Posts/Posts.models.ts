import prisma from "../lib/PrismaClient";
import { PostParams, updatePostParams } from "../lib/Types/post";
import CustomError from "../middlewares/Error/customError";
import { BAD_REQUEST } from "../middlewares/Error/ErrorConstructor";

const getPosts = async (orderByFilter: string) => {
  const orderBy = orderByFilter === 'desc' ? 'desc' : 'asc';
  const orderedPosts = await prisma.posts.findMany({ orderBy: { createdAt: orderBy } });
  return orderedPosts;
}

const getPostById = async (id: string) => {
  const post = await prisma.posts.findUnique({ where: { id } });
  if(!post) throw new CustomError(`Post with id ${id} not found`, BAD_REQUEST.statusCode);
  return post;
}

const createPost = async ({title, content, authorId}: PostParams) => {
  const isAuthorValid = await prisma.users.findUnique({ where: { id: authorId } });
  if(!isAuthorValid) throw new CustomError(`User/author with id ${authorId} not found`, BAD_REQUEST.statusCode);
  const post = await prisma.posts.create({ data: { title, content, authorId } });
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
  deletePost
};
