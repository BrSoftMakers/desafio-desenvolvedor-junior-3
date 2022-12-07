import prisma from "../lib/PrismaClient";
import CustomError from "../middlewares/Error/customError";
import { BAD_REQUEST } from "../middlewares/Error/ErrorConstructor";

const getPosts = async (orderByFilter: string) => {
  const orderBy = orderByFilter === 'asc' ? 'asc' : 'desc';
  const orderedPosts = prisma.Posts.findMany({ orderBy: { createdAt: orderBy } });
  return orderedPosts;
}

const getPostById = async (id: string) => {
  const post = await prisma.Posts.findUnique({ where: { id } });
  if(!post) throw new CustomError(`Post with id ${id} not found`, BAD_REQUEST.statusCode);
  return post;
}

const createPost = async (title: string, content: string, authorId: string) => {
  const isAuthorValid = await prisma.Users.findUnique({ where: { id: authorId } });
  if(!isAuthorValid) throw new CustomError(`Author with id ${authorId} not found`, BAD_REQUEST.statusCode);
  const post = await prisma.Posts.create({ data: { title, content, authorId } });
  return post;
}

const updatePost = async (id: string, data: any) => {
  const post = await prisma.Posts.update({ where: { id }, data });
  if(!post) throw new CustomError(`Post with id ${id} not found, could note update`, BAD_REQUEST.statusCode);
  return post;
}

export default {
  getPosts,
  getPostById,
  createPost,
};
