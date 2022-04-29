import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TravelEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 120})
    title: string;

    @Column({length: 255})
    description: string;

    @Column()
    price: number;

    @Column("text")
    photo: string;

    @Column()
    flight: boolean
}