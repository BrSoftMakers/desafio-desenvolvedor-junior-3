import { Injectable } from '@nestjs/common';
import { UserRepositoryImp } from './user-repository-imp';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepositoryImp) {}

  async save(user: CreateUserDto): Promise<string> {
    return this.userRepository.save(user);
  }
}
