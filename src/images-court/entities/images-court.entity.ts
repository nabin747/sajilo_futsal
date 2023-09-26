import { Court } from "src/courts/entities/court.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ImagesCourt {

    @PrimaryGeneratedColumn()
    id:number

    @Column({name:'secondary_image_url'})
    secondaryImageUrl:string

    @ManyToOne(()=>Court)
    @JoinColumn({name:'court_id'})
    CourtId:Court
}
