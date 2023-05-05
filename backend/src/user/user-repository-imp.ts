import { Injectable } from '@nestjs/common';
import { UserRepository } from './user-repository';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user-dto';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class UserRepositoryImp implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async save(user: CreateUserDto): Promise<string> {
    try {
      await this.prisma.user.create({ data: user });

      return 'Usuário criado.';
    } catch (error) {
      return;
    }
  }

  findById(id: string): Promise<User> {
    return this.prisma.user.findFirst({ where: { id } });
  }
}
