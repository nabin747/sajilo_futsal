import { PartialType } from '@nestjs/mapped-types';
import { CreateImagesCourtDto } from './create-images-court.dto';

export class UpdateImagesCourtDto extends PartialType(CreateImagesCourtDto) {}
