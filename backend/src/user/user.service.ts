import { ConflictException, Injectable } from '@nestjs/common';
import { UserRepositoryImp } from './user-repository-imp';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from '@prisma/client';
import { BcryptService } from '../services/bcrypt/bcrypt.service';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepositoryImp,
    private bcrypt: BcryptService,
  ) {}

  async save(user: CreateUserDto): Promise<User> {
    if (await this.userRepository.findUserByEmail(user.email)) {
      throw new ConflictException('Email já registrado.');
    }

    user.password = await this.bcrypt.hashPassword(user.password);

    return this.userRepository.save(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findUserByEmail(email);
  }
}
