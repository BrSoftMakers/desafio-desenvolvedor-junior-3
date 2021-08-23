import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, passwd: string) {
    const user = await this.usersService.findOne(username);
    const comparePass = await bcrypt.compare(passwd, user.password);

    if (user && comparePass) {
      const { password, ...rest } = user;
      return rest;
      password;
    }

    return null;
  }

  async login(user) {
    const payload = { username: user.username, sub: user.id_user };
    return {
      acess_token: this.jwtService.sign(payload),
    };
  }
}
