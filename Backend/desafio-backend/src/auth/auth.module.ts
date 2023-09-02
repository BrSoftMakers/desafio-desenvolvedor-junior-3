import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsuarioModel } from "src/usuario/usuario.model";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtModule } from "@nestjs/jwt";
import { UsuarioService } from "src/usuario/usuario.service";

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioModel]), JwtModule.register({})],
    controllers: [AuthController],
    providers: [AuthService, UsuarioService]
})
export class AuthModule{

}