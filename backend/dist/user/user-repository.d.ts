import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user-dto';
export declare abstract class UserRepository {
    abstract save(user: CreateUserDto): Promise<string>;
    abstract findById(id: string): Promise<User>;
}
