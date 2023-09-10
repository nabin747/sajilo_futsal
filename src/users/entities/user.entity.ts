import { RoleEnum } from 'src/common/role.enum';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'user_name' })
  userName: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({type:'enum', enum:RoleEnum,default:RoleEnum.PLAYER })
  role:RoleEnum;

  @CreateDateColumn({name:'create_at'})
  createAt:Timestamp

  @UpdateDateColumn({name:'update_at'})
  updatedAt:Timestamp
}
