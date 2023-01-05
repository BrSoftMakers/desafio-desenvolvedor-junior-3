import prisma from '../database/prisma';
import IPost from '../interfaces/IPost';

export default class PostsService {
  public create = async (authorId: string, post: IPost) => {
    const newPost = await prisma.posts.create({
      data: {
        ...post,
        authorId,
      },
      include: { author: { select: { username: true, name: true } } },
    });
    return newPost;
  };
  public read = async (orderByAsc: boolean) => prisma.posts.findMany({
    include: { 
      author: { select: { username: true, name: true } }, 
    },
    orderBy: {
      createdAt: orderByAsc ? 'asc' : 'desc',
    },
  });
  public readByUser = async (orderByAsc: boolean, userId: string) =>
    prisma.posts.findMany({
      where: {
        authorId: {
          equals: userId,
        },
      },
      include: { author: { select: { username: true, name: true } } },
      orderBy: {
        createdAt: orderByAsc ? 'asc' : 'desc',
      },
    });
}
