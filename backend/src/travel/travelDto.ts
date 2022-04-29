import { IsString, IsEmail, IsNumber } from "class-validator";

export class TravelDto{
    @IsString()
    title: string;

    @IsString()
    @IsEmail()
    description: string;

    @IsNumber()
    price: number;

    @IsString()
    photo: string;
}