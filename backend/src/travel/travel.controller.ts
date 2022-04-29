import { TravelDto } from './travelDto';
import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';

import { TravelEntity } from './travel.entity';
import { TravelService } from './travel.service';

@Controller("/travel")
export class TravelController {
  constructor(private readonly userService: TravelService) {}

  @Get()
  public async getUsers(): Promise <TravelEntity []> {
    return this.userService.getAllTravel();
  }

  @Post()
  public async createUser(@Body() travel: TravelDto){
    return this.userService.createTravel(travel)
  }

  @Put()
  public async updateUser(@Param("id", ParseIntPipe) id: number, @Body() travel: TravelDto){
    return this.userService.updateTravel(id, travel)
  }
}
