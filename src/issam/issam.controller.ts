import { Controller , Get, Post, Body} from '@nestjs/common';

@Controller('issam')
export class IssamController {
    @Get()
    Rappell() {
        return 'RAPEEEEEEL';
    }

    @Post()
    done(@Body() body: any) {
        console.log(body);
        return body;
    }

}
