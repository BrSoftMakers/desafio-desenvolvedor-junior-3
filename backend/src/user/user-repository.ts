import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user-dto';

export abstract class UserRepository {
  abstract save(user: CreateUserDto): Promise<User>;
  abstract findById(id: string): Promise<User | null>;
  abstract findUserByEmail(email: string): Promise<User | null>;
}
