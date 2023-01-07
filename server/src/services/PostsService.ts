import prisma from '../database/prisma';
import { ErrorTypes } from '../errors/catalog';
import IPost from '../interfaces/IPost';
import IUser from '../interfaces/IUser';

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

  public update = async (id: number, userId: string, post: IPost) => {
    const postExists = await this.getPostById(id);
    if (!postExists) throw new Error(ErrorTypes.PostNotFound);

    if (postExists.authorId !== userId) {
      throw new Error(ErrorTypes.Unauthorized);
    }

    const updatedPost = await prisma.posts.update({
      where: { id },
      data: {
        ...post,
      },
      include: { author: { select: { username: true, name: true } } },
    });
    return updatedPost;
  };
  public delete = async (id: number, user:Partial<IUser>) => {
    const postExists = await this.getPostById(id);
    if (!postExists) throw new Error(ErrorTypes.PostNotFound);
    const author = postExists.authorId === user.id;

    if (!author && user.role !== 'ADMIN') {
      throw new Error(ErrorTypes.Unauthorized);
    }

    await prisma.posts.delete({
      where: { id },
    });
  };
}
