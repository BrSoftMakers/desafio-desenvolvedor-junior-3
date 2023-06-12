import { Module } from '@nestjs/common';
import { BcryptService } from './bcrypt/bcrypt.service';

@Module({
  providers: [BcryptService],
  exports: [BcryptService],
})
export class ServicesModule {}
