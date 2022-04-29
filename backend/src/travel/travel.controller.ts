import { TravelDto } from './travelDto';
import { Body, Controller, Get, Post } from '@nestjs/common';

import { TravelModel } from './travel.entity';
import { TravelService } from './travel.service';

@Controller("/travel")
export class TravelController {
  constructor(private readonly userService: TravelService) {}

  @Get()
  public async getUsers(): Promise <TravelModel []> {
    return this.userService.getAllTravel();
  }

  @Post()
  public async createUser(@Body() travel: TravelDto){
    return this.userService.createTravel(travel)
  }
}
