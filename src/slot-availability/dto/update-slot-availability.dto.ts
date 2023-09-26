import { PartialType } from '@nestjs/mapped-types';
import { CreateSlotAvailabilityDto } from './create-slot-availability.dto';

export class UpdateSlotAvailabilityDto extends PartialType(CreateSlotAvailabilityDto) {}
