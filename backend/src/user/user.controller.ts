import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UserService } from './user.service';

@Controller('/api/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async save(@Body() user: CreateUserDto): Promise<{ message: string }> {
    await this.userService.save(user);

    return { message: 'Usuário criado.' };
  }
}
