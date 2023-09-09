import { Body, Controller, Get, Param, Post } from "@nestjs/common/decorators";
import { UsuarioService } from "./usuario.service";
import { UsuarioModel } from "./usuario.model";

@Controller("register")
export class UsuarioController {
    constructor(
        private usuarioRepository: UsuarioService,
    ){}

    @Get("")
    async buscarTodos(){
        return await this.usuarioRepository.getUsuarios();
    }

    @Get("/:usuario")
    async buscarId(@Param("usuario") usuario: string){
        return await this.usuarioRepository.getUsuarioId(usuario);
    }

    @Post("")
    async cadastrarUsuario(@Body() body: UsuarioModel){
        return await this.usuarioRepository.postUsuario(body);
    }
}