import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { TravelEntity } from "./travel.entity";
import { TravelService } from "./travel.service";
import { TravelController } from "./travel.controller";

@Module({
    imports: [ TypeOrmModule.forFeature([ TravelEntity ])],
    controllers: [TravelController],
    providers: [TravelService]
})

export class TravelModule {};