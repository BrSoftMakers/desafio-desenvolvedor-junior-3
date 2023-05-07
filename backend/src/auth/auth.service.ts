import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { BcryptService } from '../services/bcrypt/bcrypt.service';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private bcrypt: BcryptService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    if (await this.bcrypt.comparePassword(password, user.password)) {
      return user;
    }
    throw new UnauthorizedException('Usuário ou Senha Inválidos');
  }

  async generateToken({ name, email, id }: User): Promise<any> {
    return {
      token: this.jwtService.sign({ sub: id, email }),
      user: { email, name, id },
    };
  }

  async decodeToken(token: string) {
    try {
      const decoded = this.jwtService.decode(token);

      if (decoded) {
        return decoded;
      }
      return new BadRequestException('Erro no Token do usuário');
    } catch (error) {
      return new BadRequestException('Erro no Token do usuário');
    }
  }
}
