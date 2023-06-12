import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PostsRepositoryImp } from './posts-repository-imp';
import { CreatePostDto } from './dto/create-post-dto';
import { Post } from '@prisma/client';
import { UpdatePostDto } from './dto/update-post-dto';

@Injectable()
export class PostsService {
  constructor(private postsRepository: PostsRepositoryImp) {}

  async save(post: CreatePostDto): Promise<{ message: string }> {
    if (await this.postsRepository.findPostByTitle(post.title)) {
      throw new ConflictException('Já existe um post com esse título');
    }

    return this.postsRepository.save(post);
  }

  async findById(postId: string): Promise<Post | { message: string }> {
    const post = await this.postsRepository.findById(postId);

    if (!post) {
      throw new NotFoundException('Post não encontrado.');
    }

    return post;
  }

  async getAll(orderBy?: string, userId?: string): Promise<Post[] | null> {
    return this.postsRepository.getAll(orderBy, userId);
  }

  async delete(postId: string): Promise<void> {
    if (!(await this.findById(postId))) {
      throw new NotFoundException('Post não encontrado.');
    }

    return this.postsRepository.delete(postId);
  }

  async update(
    postId: string,
    updatePost: UpdatePostDto,
  ): Promise<{ message: string }> {
    if (!(await this.findById(postId))) {
      throw new NotFoundException('Post não encontrado.');
    }

    return this.postsRepository.update(postId, updatePost);
  }
}
