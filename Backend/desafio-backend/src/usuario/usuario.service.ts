import { Body, Injectable, Param } from "@nestjs/common";
import { UsuarioModel } from "./usuario.model";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(UsuarioModel)
        private usuarioRepository: Repository<UsuarioModel>,
    ) { }

    // Busca todos os usuarios ja cadastrados
    async getUsuarios() {
        return await this.usuarioRepository.find();
    }

    // Busca um unico usuario pelo usuario
    async getUsuarioId(usuario: string): Promise<UsuarioModel> {
        return await this.usuarioRepository.findOne({ where: { usuario } })
    }

    async postUsuario(@Body() body: UsuarioModel): Promise<UsuarioModel>{
        const dados = this.usuarioRepository.create(body);
        return await this.usuarioRepository.save(dados);
    }
}