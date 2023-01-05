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
}
