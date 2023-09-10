import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';


@Injectable()
export class AuthService {

  constructor(
    private readonly usersService:UsersService,
    private jwtService:JwtService,

  ){}

  async validateUser(email:string, password:string){
    return this.usersService.findOne(email,password);
  }

  async login(user: any) {
    try{
     const isvalid= await this.validateUser(user.email,user.password);
     if(isvalid){
       const payload = {email:user.email};
       return {...payload,token:this.jwtService.sign(payload)};
     }else{
      throw new UnauthorizedException();
     }
    }catch(err){
      throw new Error(`${err}`)
    }
  }

  async getLoginIn(email:string){
const userDetail = await this.usersService.findUser(email);
const {password,...rest} = userDetail?.[0];
return rest
  }
}
