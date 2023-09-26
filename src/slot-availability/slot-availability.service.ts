import { Injectable } from '@nestjs/common';
import { CreateSlotAvailabilityDto } from './dto/create-slot-availability.dto';
import { UpdateSlotAvailabilityDto } from './dto/update-slot-availability.dto';

@Injectable()
export class SlotAvailabilityService {
  create(createSlotAvailabilityDto: CreateSlotAvailabilityDto) {
    return 'This action adds a new slotAvailability';
  }

  findAll() {
    return `This action returns all slotAvailability`;
  }

  findOne(id: number) {
    return `This action returns a #${id} slotAvailability`;
  }

  update(id: number, updateSlotAvailabilityDto: UpdateSlotAvailabilityDto) {
    return `This action updates a #${id} slotAvailability`;
  }

  remove(id: number) {
    return `This action removes a #${id} slotAvailability`;
  }
}
