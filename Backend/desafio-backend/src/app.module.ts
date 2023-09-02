import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { ormConfig } from 'ormconfig';
import { PostModule } from './post/post.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), UsuarioModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
