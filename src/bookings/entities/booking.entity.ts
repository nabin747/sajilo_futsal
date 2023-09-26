import { Court } from "src/courts/entities/court.entity";
import { SlotAvailability } from "src/slot-availability/entities/slot-availability.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('bookings')
export class Booking {

    @PrimaryGeneratedColumn()
    id:number

    @Column({name:'payment_status'})
    paymentStatus:string

    @Column('double precision')
    amount:string

    @ManyToOne(()=>User)
    @JoinColumn({name:'user_id'})
    userId:User

    @ManyToOne(()=>Court)
    @JoinColumn({name:'court_id'})
    courtId:Court

    @OneToOne(()=>SlotAvailability)
    @JoinColumn({name:'available_time_slot_id'})
    availableTimeSlotId:SlotAvailability
}
