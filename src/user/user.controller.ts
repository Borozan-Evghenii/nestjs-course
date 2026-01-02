import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public getAllUsers() {
    return this.userService.findAll();
  }

  @Post('create')
  public createUser(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }

  @Get(':id')
  public getUser(@Param() id: string) {
    return this.userService.findById(Number(id));
  }
}
