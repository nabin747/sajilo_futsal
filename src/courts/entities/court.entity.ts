import { Address } from 'src/address/entities/address.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

@Entity()
export class Court {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: String;

  @Column()
  description: string;
  @Column()
  contact: string;

  @Column({ name: 'primary_image_url', nullable: true })
  primaryImageUrl: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Timestamp;

  @CreateDateColumn({ name: 'create_at' })
  createdAt: Timestamp;

  @CreateDateColumn({ name: 'updated_at' })
  upadatedAt: Timestamp;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'create_by' })
  createdBy: User;

  @OneToOne(()=>Address)
  @JoinColumn({name:'address_id'})
  AddressId:Address
}
