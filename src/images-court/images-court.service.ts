import { Injectable } from '@nestjs/common';
import { CreateImagesCourtDto } from './dto/create-images-court.dto';
import { UpdateImagesCourtDto } from './dto/update-images-court.dto';

@Injectable()
export class ImagesCourtService {
  create(createImagesCourtDto: CreateImagesCourtDto) {
    return 'This action adds a new imagesCourt';
  }

  findAll() {
    return `This action returns all imagesCourt`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imagesCourt`;
  }

  update(id: number, updateImagesCourtDto: UpdateImagesCourtDto) {
    return `This action updates a #${id} imagesCourt`;
  }

  remove(id: number) {
    return `This action removes a #${id} imagesCourt`;
  }
}
