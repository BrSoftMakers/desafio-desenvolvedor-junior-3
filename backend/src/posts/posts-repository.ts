import { Post } from '@prisma/client';
import { CreatePostDto } from './dto/create-post-dto';
import { UpdatePostDto } from './dto/update-post-dto';

export abstract class PostsRepository {
  abstract save(createPost: CreatePostDto): Promise<{ message: string }>;
  abstract findById(postId: string): Promise<Post | null>;
  abstract update(
    postId: string,
    updatePost: UpdatePostDto,
  ): Promise<{ message: string }>;
  abstract delete(postId: string): Promise<void>;
  abstract getAll(orderBy: string, userId: string): Promise<Post[] | null>;
  abstract findPostByTitle(title: string): Promise<Post | null>;
}
