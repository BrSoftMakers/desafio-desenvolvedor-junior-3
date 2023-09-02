import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { PostService } from "./post.service";
import { PostModel } from "./post.model";
import { AuthGuard } from "@nestjs/passport";

@Controller("posts")
export class PostController{
    constructor(
        private postRepository: PostService
    ){}

    // Rota para buscar todos os Posts
    @Get("")
    @UseGuards(AuthGuard('jwt'))
    async buscarPosts(){
        return await this.postRepository.getPosts()
    }

    // Rota para buscar um Post pelo id
    @Get("/posts/:id")
    async buscarPostUsuario(@Param("id") id: number) {
        return await this.postRepository.getPostId(id);
    }

    // Rota cadastrar um novo Post
    @Post("")
    async cadastrarPost(@Body() body: PostModel): Promise<PostModel>{
        return await this.postRepository.postPost(body);
    }

    // Rota para atualizar o Post
    @Put("/:id")
    async atualizarPost(@Param("id") id: number, @Body() dados: PostModel){
        return await this.postRepository.putPost(id, dados);
    }

    @Delete("/:id")
    async deletarPost(@Param("id") id: number){
        return await this.postRepository.deletePost(id);
    }

}