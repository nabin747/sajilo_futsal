import { Injectable } from '@nestjs/common';
import { CreateCourtDto } from './dto/create-court.dto';
import { UpdateCourtDto } from './dto/update-court.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Court } from './entities/court.entity';
import { Repository } from 'typeorm';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class CourtsService {
  constructor(
    @InjectRepository(Court)
    private readonly courtService: Repository<Court>,
    private readonly authService: AuthService,
  ) {}
  async create(createCourtDto: CreateCourtDto, userDetail: any) {
    const createdBy = userDetail;
    const court = this.courtService.create({ ...createCourtDto, createdBy });

    return await this.courtService.save(court);
  }

  async findAll(currentUser: any) {
    const userInfo = await this.authService.getLoginIn(currentUser.email);
    const userId = userInfo.id;
    return await this.courtService
      .createQueryBuilder('courts')
      .leftJoinAndSelect('courts.createdBy', 'users')
      .where('courts.createdBy =:id', { id: userId })
      .select([
        'courts.id',
        'courts.name',
        'courts.location',
        'courts.description',
        'courts.contact',
        'courts.primaryImageUrl',
        'users.id',
        'users.name',
        'users.userName',
        'users.email',
        'users.role',

      ])
      .getMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} court`;
  }

  update(id: number, updateCourtDto: UpdateCourtDto) {
    return `This action updates a #${id} court`;
  }

  remove(id: number) {
    return `This action removes a #${id} court`;
  }
}
