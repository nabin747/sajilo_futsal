import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const user = new User();
      const hashPassword = await bcrypt.hash(createUserDto.password, 10);
      user.userName = createUserDto.username;
      user.email = createUserDto.email;
      user.name = createUserDto.name;
      user.role = createUserDto.role;
      user.password = hashPassword;
      return this.userRepository.save(user);
    } catch (err) {
      throw new Error(`Error ${err}`);
    }
  }

  async findOne(email:string,password:string){
      try{
        const user = await this.userRepository.findOne({
          where:{email:email},
        });
        const isMatch = await bcrypt.compare(password,user.password);
        if(user && isMatch){
          return user;
        }else{
          throw new UnauthorizedException('unauthorized');
        }
      }catch(err){
        throw new Error(`Error finding ${err}`);
      }
  }

  async findUser(email:string){
   return await this.userRepository.find({where:{email}})
  }
}
