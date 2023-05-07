import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post-dto';
import { PostsService } from './posts.service';
import { JwtAuthGuard } from '../auth/jwt-strategy/jwt-auth.guard';
import { Request } from 'express';
import { Post as PostType } from '@prisma/client';
import { UpdatePostDto } from './dto/update-post-dto';

@Controller('posts')
@UseGuards(JwtAuthGuard)
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  async save(
    @Body() post: CreatePostDto,
    @Req() req: Request,
  ): Promise<{ message: string }> {
    post.userId = req?.user?.id;

    await this.postsService.save(post);

    return { message: 'Post criado.' };
  }

  @Get(':postId?')
  async get(
    @Param('postId') postId: string,
  ): Promise<PostType | PostType[] | { message: string } | null> {
    if (postId) {
      return this.postsService.findById(postId);
    } else {
      return this.postsService.getAll();
    }
  }

  @Delete(':postId')
  async delete(@Param('postId') postId: string): Promise<void> {
    return this.postsService.delete(postId);
  }

  @Put(':postId')
  async update(
    @Param('postId') postId: string,
    @Body() updatePost: UpdatePostDto,
  ): Promise<{ message: string }> {
    return this.postsService.update(postId, updatePost);
  }
}
