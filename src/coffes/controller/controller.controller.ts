import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CoffesService } from '../coffes.service';
import { CreatCoffeDto } from '../dto/creat-coffe.dto/creat-coffe.dto';
import { UpdateCoffeDto } from '../dto/update-coffe.dto/update-coffe.dto';

@Controller('coffes')
export class ControllerController {
    constructor(private readonly coffeService: CoffesService) {}

    @Get()
    findAll() {
        return this.coffeService.findAll();
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.coffeService.findOne(id);
    }

    @Post()
    create(@Body() creatCoffeDto: CreatCoffeDto) {
        return this.coffeService.create(creatCoffeDto);
    }

    @Patch()
    update(@Param('id') id:string ,@Body() UpdateCoffe: UpdateCoffeDto) {
        return this.coffeService.update(id, UpdateCoffe);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string) {
        return this.coffeService.removeOne(id);
    }

}
