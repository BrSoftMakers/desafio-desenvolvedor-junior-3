import { Injectable } from '@nestjs/common';
import { UserRepository } from './user-repository';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user-dto';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class UserRepositoryImp implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async save(user: CreateUserDto): Promise<User> {
    try {
      return this.prisma.user.create({ data: user });
    } catch (error) {
      return;
    }
  }

  findById(id: string): Promise<User> {
    return this.prisma.user.findFirst({ where: { id } });
  }

  findUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findFirst({ where: { email } });
  }
}
