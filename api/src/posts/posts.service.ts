/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  create(createPostDto: CreatePostDto) {
    return this.postsRepository.save(createPostDto);
  }

  async findAllReverse() {
    const posts = await this.postsRepository.find();
    const postsHandled = [];

    posts.forEach((post) => {
      const { user, ...rest } = post;
      const { password, ...dataUser } = user;

      postsHandled.push({ ...rest, dataUser });
    });

    return postsHandled.reverse();
  }

  async findAll() {
    const posts = await this.postsRepository.find();
    const postsHandled = [];

    posts.forEach((post) => {
      const { user, ...rest } = post;
      const { password, ...dataUser } = user;

      postsHandled.push({ ...rest, dataUser });
    });

    return postsHandled;
  }

  async findOne(id: string) {
    const { user, ...rest } = await this.postsRepository.findOne(id);
    const { password, ...dataUser } = user;

    return { ...rest, dataUser };
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return this.postsRepository.update(id, updatePostDto);
  }

  remove(id: string) {
    return this.postsRepository.delete(id);
  }
}
