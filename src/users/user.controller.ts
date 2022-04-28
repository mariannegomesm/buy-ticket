import { UserDto } from './userDto';
import { Body, Controller, Get, Post } from '@nestjs/common';

import { UserModel } from './user.models';
import { UserService } from './user.service';

@Controller("/users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async getUsers(): Promise <UserModel []> {
    return this.userService.getAllUsers();
  }

  @Post()
  public async createUser(@Body() user: UserDto){
    return this.userService.createUser(user)
  }
}
