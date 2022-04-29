import { Column } from "typeorm";

export class TravelDto {
   @Column()
   title: string;
   
   @Column()
   description: string;

   @Column()
   price: number;

   @Column()
   photo: string;

    @Column()
    flight: boolean   
}