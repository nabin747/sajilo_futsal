import { Module } from '@nestjs/common';
import { ImagesCourtService } from './images-court.service';
import { ImagesCourtController } from './images-court.controller';

@Module({
  controllers: [ImagesCourtController],
  providers: [ImagesCourtService],
})
export class ImagesCourtModule {}
