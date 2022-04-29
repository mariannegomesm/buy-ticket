import { Repository } from "typeorm";
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { TravelEntity } from './travel.entity';
import { TravelDto } from "./travelDto";

@Injectable()
export class TravelService {
  constructor(@InjectRepository(TravelEntity) private model: Repository<TravelEntity>) {}

  public async getAllTravel(): Promise<TravelEntity []> {
    return await this.model.find()
  }

  public async createTravel(travel: TravelDto){
    return await this.model.save(travel) 
  }
}
