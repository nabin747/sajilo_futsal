import { TimeSlot } from "src/time-slots/entities/time-slot.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity('slot_availability')
export class SlotAvailability {

    @PrimaryGeneratedColumn()
    id:number

    @Column({name:'slot_status'})
    slotStatus:string

    @CreateDateColumn({name:'booked_date'})
    bookedDate:Timestamp

    @OneToOne(()=>TimeSlot)
    @JoinColumn({name:'slot_id'})
    slotId:TimeSlot
}
