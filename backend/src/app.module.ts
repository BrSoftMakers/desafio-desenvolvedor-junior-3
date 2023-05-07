import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [UserModule, DatabaseModule, ServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
