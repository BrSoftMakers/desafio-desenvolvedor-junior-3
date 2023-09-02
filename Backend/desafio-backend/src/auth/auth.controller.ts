import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UsuarioModel } from "src/usuario/usuario.model";

@Controller("")
export class AuthController{
    constructor(private authService: AuthService){};

    @Post("login")
    async login(@Body() body: UsuarioModel){
        return this.authService.validarUsuario(body.id, body.senha);
    }
}