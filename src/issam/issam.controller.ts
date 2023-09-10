import { Controller , Get, Post, Body, Param, Query} from '@nestjs/common';
import { CoffesService } from 'src/coffes/coffes.service';

@Controller('issam')
export class IssamController {
    constructor(private readonly Coffes: CoffesService) {}

    @Get()
    Rappell(@Query('type') type: 'black' | 'Normal') {
        console.log(type);
        return this.Coffes.getCoffes(type);
    }

    @Post()
    done(@Body() body: any) {
        return body;
    }

    @Get(':id')
    dynamic(@Param('id') id : string)
    {
        return `This is your Rout /${id}`
    }

}
