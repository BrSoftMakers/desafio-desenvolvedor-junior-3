import { Injectable, Body } from "@nestjs/common";
import { PostModel } from "./post.model";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(PostModel)
        private postRepository: Repository<PostModel>
    ) { }

    // Busca todas as postagens
    // TO DO: filtrar por usuario, maior para o menor, menor para o maior
    async getPosts(id: number, ordem: string) {
        if (id == 0) {
            return await this.postRepository.find({
                order: {
                    id: ordem === 'desc' ? 'DESC' : 'ASC',
                },
            });
        } else {
            return await this.postRepository.find({
                where: {
                    id_usuario_insercao: id,
                },
                order: {
                    id: ordem === 'desc' ? 'DESC' : 'ASC',
                },
            });
        }
    }

    // Busca a postagem pelo id
    async getPostId(id: number): Promise<PostModel> {
        return await this.postRepository.findOne({ where: { id } })
    }

    // Cadastra uma nova postagem
    async postPost(@Body() body: PostModel): Promise<PostModel> {
        const dados = this.postRepository.create(body);
        return await this.postRepository.save(dados);
    }

    // Atualiza no banco a postagem de acordo com o id
    async putPost(id: number, dados: Partial<PostModel>) {
        return await this.postRepository.update(id, dados);
    }

    // Deleta do banco a postagem
    async deletePost(id: number) {
        return await this.postRepository.delete(id);
    }
}