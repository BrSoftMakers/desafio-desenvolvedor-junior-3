import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UsuarioService } from "src/usuario/usuario.service";
import { UsuarioModel } from "src/usuario/usuario.model";
import { JwtPayload } from "./jwt-payload";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt"){
    constructor(private usuarioService: UsuarioService){
        super({
            secretOrKey: "123456abcd",
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
        });
    }

    async validate(payload: JwtPayload): Promise<UsuarioModel>{
        const {id} = payload;
        const user = await this.usuarioService.getUsuarioId(id);
        if(!user){
            throw new UnauthorizedException("Email e/ou senha invalidos!");
        }
        return user;
    }

}