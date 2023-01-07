import prisma from '../database/prisma';
import { ErrorTypes } from '../errors/catalog';
import IPost from '../interfaces/IPost';

export default class PostsService {
  private getPostById = async (id: number) => prisma.posts.findUnique({
    where: { id },
    include: { 
      author: { select: { username: true, name: true } }, 
    },
  });
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

  public readOne = async (id: number) => {
    const post = await this.getPostById(id);
    if (!post) throw new Error(ErrorTypes.PostNotFound);
    return post;
  };

  public update = async (id: number, post: IPost) => {
    const postExists = await this.getPostById(id);
    if (!postExists) throw new Error(ErrorTypes.PostNotFound);

    const newPost = await prisma.posts.update({
      where: { id },
      data: {
        ...post,
      },
      include: { author: { select: { username: true, name: true } } },
    });
    return newPost;
  };
  public delete = async (id: number) => {
    const postExists = await this.getPostById(id);
    if (!postExists) throw new Error(ErrorTypes.PostNotFound);

    await prisma.posts.delete({
      where: { id },
    });
  };
}
