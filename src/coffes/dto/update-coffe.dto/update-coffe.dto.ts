import { PartialType } from "@nestjs/mapped-types";
import { CreatCoffeDto } from "../creat-coffe.dto/creat-coffe.dto";

export class UpdateCoffeDto extends PartialType(CreatCoffeDto) {}
