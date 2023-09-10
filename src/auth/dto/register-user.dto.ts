import { LoginUserDTO } from './login-user.dto';
import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class RegisterUserDTO extends LoginUserDTO {

    @IsNotEmpty()
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    @IsNotEmpty()
    username:string;

    @IsNotEmpty()
    role:string
}
