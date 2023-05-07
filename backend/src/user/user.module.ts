import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepositoryImp } from './user-repository-imp';
import { DatabaseModule } from '../database/database.module';
import { ServicesModule } from '../services/services.module';

@Module({
  imports: [DatabaseModule, ServicesModule],
  controllers: [UserController],
  providers: [UserService, UserRepositoryImp],
  exports: [UserService],
})
export class UserModule {}
