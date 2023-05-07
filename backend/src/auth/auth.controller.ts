import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-strategy/local-auth.guard';

@Controller('/login')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async login(@Req() req: any): Promise<any> {
    return this.authService.generateToken(req.user);
  }
}
