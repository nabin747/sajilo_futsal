import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SlotAvailabilityService } from './slot-availability.service';
import { CreateSlotAvailabilityDto } from './dto/create-slot-availability.dto';
import { UpdateSlotAvailabilityDto } from './dto/update-slot-availability.dto';

@Controller('slot-availability')
export class SlotAvailabilityController {
  constructor(private readonly slotAvailabilityService: SlotAvailabilityService) {}

  @Post()
  create(@Body() createSlotAvailabilityDto: CreateSlotAvailabilityDto) {
    return this.slotAvailabilityService.create(createSlotAvailabilityDto);
  }

  @Get()
  findAll() {
    return this.slotAvailabilityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.slotAvailabilityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSlotAvailabilityDto: UpdateSlotAvailabilityDto) {
    return this.slotAvailabilityService.update(+id, updateSlotAvailabilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.slotAvailabilityService.remove(+id);
  }
}
