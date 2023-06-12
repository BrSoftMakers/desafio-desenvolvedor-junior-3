import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(login: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(
      login.toLowerCase(),
      password,
    );
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user;
  }
}
