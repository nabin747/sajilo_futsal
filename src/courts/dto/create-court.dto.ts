import { Type } from "class-transformer";
import { IsDefined, IsNotEmpty, IsObject, ValidateNested } from "class-validator";
import { CreateAddressDto } from "src/address/dto/create-address.dto";

export class CreateCourtDto {

    @IsNotEmpty()
    name:string;
    @IsNotEmpty()
    location:string;

    @IsNotEmpty()
    description:string;
    @IsNotEmpty()
    contact:string;

    // @IsNotEmpty()
    primaryImageUrl:string;

    @ValidateNested({each:true})
    @IsDefined()
    @Type(()=>CreateAddressDto)
    address: CreateAddressDto 

}
