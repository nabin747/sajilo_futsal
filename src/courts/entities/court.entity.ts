import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Court {

  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  name:string;

  @Column()
  location:String;

  @Column()
  description:string;
  @Column()
  contact:string;

  @Column({name:'primary_image_url',nullable:true})
  primaryImageUrl:string

  @ManyToOne(()=>User)
  @JoinColumn({name:'create_by'})
  createdBy:User
}
