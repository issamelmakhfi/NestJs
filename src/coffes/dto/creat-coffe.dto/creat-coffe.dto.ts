import { IsString } from "class-validator";
import { IsNumber } from "class-validator";

export class CreatCoffeDto {
    @IsNumber()
    readonly id : number;
    @IsString()
    readonly name : string;
    @IsString()
    readonly brand: string;
    @IsString({ each: true })
    readonly flavor: string[];
}
