import { Repository } from "typeorm";
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserModel } from './user.entity';
import { UserDto } from "./userDto";

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserModel) private model: Repository<UserModel>) {}

  public async getAllUsers(): Promise<UserModel []> {
    return await this.model.find()
  }

  public async createUser(user: UserDto){
    return await this.model.save(user) 
  }

  public async updateUser(id: number, user: UserDto){
    return this.model.update(id, user);
  }

  public async deleteUser(id: number){
    return this.model.delete(id)
  }
}
