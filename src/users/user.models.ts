import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class UserModel{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 120})
    name: string;

    @Column({length: 255})
    email: string;

    @Column({length: 8})
    password: string;

    @Column("text")
    photo: string;
}