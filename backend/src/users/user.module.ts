import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UserModel } from "./user.entity";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";

@Module({
    imports: [ TypeOrmModule.forFeature([ UserModel ])],
    controllers: [UserController],
    providers: [UserService]
})

export class UserModule {};