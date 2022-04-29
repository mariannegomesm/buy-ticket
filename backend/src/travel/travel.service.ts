import { Repository } from "typeorm";
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { TravelModel } from './travel.entity';
import { TravelDto } from "./travelDto";

@Injectable()
export class TravelService {
  constructor(@InjectRepository(TravelModel) private model: Repository<TravelModel>) {}

  public async getAllTravel(): Promise<TravelModel []> {
    return await this.model.find()
  }

  public async createTravel(travel: TravelDto){
    return await this.model.save(travel) 
  }
}
