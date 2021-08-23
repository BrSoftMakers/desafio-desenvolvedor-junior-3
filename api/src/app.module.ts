import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { PostsModule } from './posts/posts.module';
import { Post } from './posts/entities/post.entity';
import { AuthenticationModule } from './authentication/authentication.module';
import { databaseConstants } from './constants/databaseConstants';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: databaseConstants.db_port,
      username: databaseConstants.db_username,
      password: databaseConstants.db_password,
      database: 'softblog',
      entities: [User, Post],
      synchronize: true,
    }),
    UsersModule,
    PostsModule,
    AuthenticationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
