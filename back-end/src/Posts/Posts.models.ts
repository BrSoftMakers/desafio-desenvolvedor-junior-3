import prisma from "../lib/PrismaClient";
import CustomError from "../middlewares/Error/customError";
import { BAD_REQUEST } from "../middlewares/Error/ErrorConstructor";

const getPosts = async (orderByFilter: string) => {
  const orderBy = orderByFilter === 'asc' ? 'asc' : 'desc';
  const orderedPosts = prisma.posts.findMany({ orderBy: { createdAt: orderBy } });
  return orderedPosts;
}

const getPostById = async (id: string) => {
  const post = await prisma.posts.findUnique({ where: { id } });
  if(!post) throw new CustomError(`Post with id ${id} not found`, BAD_REQUEST.statusCode);
  return post;
}

const createPost = async (title: string, content: string, authorId: string) => {
  const isAuthorValid = await prisma.users.findUnique({ where: { id: authorId } });
  if(!isAuthorValid) throw new CustomError(`Author with id ${authorId} not found`, BAD_REQUEST.statusCode);
  const post = await prisma.posts.create({ data: { title, content, authorId } });
  return post;
}

const updatePost = async (id: string, data: any) => {
  const post = await prisma.posts.update({ where: { id }, data });
  if(!post) throw new CustomError(`Post with id ${id} not found, could note update`, BAD_REQUEST.statusCode);
  return post;
}

export default {
  getPosts,
  getPostById,
  createPost,
};
