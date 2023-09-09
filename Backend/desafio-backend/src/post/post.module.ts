import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModel } from "./post.model";
import { PostService } from "./post.service";
import { PostController } from "./post.controller";

@Module({
    imports: [TypeOrmModule.forFeature([PostModel])],
    controllers: [PostController],
    providers: [PostService]
})
export class PostModule {}