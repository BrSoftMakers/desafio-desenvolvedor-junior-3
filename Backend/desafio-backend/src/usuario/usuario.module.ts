import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModel } from './usuario.model';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioModel])],
    controllers: [UsuarioController],
    providers: [UsuarioService]
})
export class UsuarioModule {}