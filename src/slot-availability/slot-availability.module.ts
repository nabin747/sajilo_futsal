import { Module } from '@nestjs/common';
import { SlotAvailabilityService } from './slot-availability.service';
import { SlotAvailabilityController } from './slot-availability.controller';

@Module({
  controllers: [SlotAvailabilityController],
  providers: [SlotAvailabilityService],
})
export class SlotAvailabilityModule {}
