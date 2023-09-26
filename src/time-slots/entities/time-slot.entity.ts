import { Column, Double, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('time_slots')
export class TimeSlot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type:'double precision'})
  price: number;
  @Column('time', { name: 'start_time' })
  startTime: string;

  @Column('time', { name: 'end_time' })
  endTime: string;
}
