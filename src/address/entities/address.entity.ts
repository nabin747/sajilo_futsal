import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Address {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    provience:string

    @Column()
    district:string

    @Column()
    city:string

}
