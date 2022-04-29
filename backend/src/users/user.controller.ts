import { UserDto } from './userDto';
import { Body, Controller, Get, ParseIntPipe, Post, Put, Param, Delete } from '@nestjs/common';

import { UserModel } from './user.entity';
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

  @Put(":id")
  public async updateTravel(@Param("id", ParseIntPipe) id: number, @Body() userData: UserDto){
    return this.userService.updateTravel(id, userData);
  }

  @Delete(":id")
  public async deleteTravel(@Param("id", ParseIntPipe) id: number){
    return this.userService.deleteTravel(id);
  }
}
