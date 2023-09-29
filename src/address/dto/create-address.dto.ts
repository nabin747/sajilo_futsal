import { IsNotEmpty } from "class-validator";

export class CreateAddressDto {
    @IsNotEmpty()
    provience:string

    @IsNotEmpty()
    district:string

    @IsNotEmpty()
    city:string
}
