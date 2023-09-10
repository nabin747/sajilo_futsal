import { IsNotEmpty } from "class-validator";

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
}
