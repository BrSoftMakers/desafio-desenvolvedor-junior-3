import { UserRepository } from './user-repository';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user-dto';
import { PrismaService } from '../database/prisma/prisma.service';
export declare class UserRepositoryImp implements UserRepository {
    private prisma;
    constructor(prisma: PrismaService);
    save(user: CreateUserDto): Promise<string>;
    findById(id: string): Promise<User>;
}
