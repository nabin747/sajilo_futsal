import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { RoleEnum } from 'src/common/role.enum';

export class CreateUserDto {
  @IsNotEmpty()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  role: RoleEnum;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
