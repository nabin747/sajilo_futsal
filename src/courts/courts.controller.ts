import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CourtsService } from './courts.service';
import { CreateCourtDto } from './dto/create-court.dto';
import { UpdateCourtDto } from './dto/update-court.dto';
import { CurrentUser } from 'src/auth/decorator/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AuthService } from 'src/auth/auth.service';

@Controller('courts')
export class CourtsController {
  constructor(private readonly courtsService: CourtsService,
    private readonly authService:AuthService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createCourtDto: CreateCourtDto,@CurrentUser() currentUser) {
    const logInUser = await this.authService.getLoginIn(currentUser.email);
    return await this.courtsService.create(createCourtDto,logInUser);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@CurrentUser() currentUser) {
    return this.courtsService.findAll(currentUser);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.courtsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourtDto: UpdateCourtDto) {
    return this.courtsService.update(+id, updateCourtDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courtsService.remove(+id);
  }
}
