import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImagesCourtService } from './images-court.service';
import { CreateImagesCourtDto } from './dto/create-images-court.dto';
import { UpdateImagesCourtDto } from './dto/update-images-court.dto';

@Controller('images-court')
export class ImagesCourtController {
  constructor(private readonly imagesCourtService: ImagesCourtService) {}

  @Post()
  create(@Body() createImagesCourtDto: CreateImagesCourtDto) {
    return this.imagesCourtService.create(createImagesCourtDto);
  }

  @Get()
  findAll() {
    return this.imagesCourtService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagesCourtService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImagesCourtDto: UpdateImagesCourtDto) {
    return this.imagesCourtService.update(+id, updateImagesCourtDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagesCourtService.remove(+id);
  }
}
