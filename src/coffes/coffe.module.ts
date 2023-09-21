import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './Entties/coffe-entiy';
import { CoffesService } from './coffes.service';
import { ControllerController } from './controller/controller.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Coffee])],
    providers: [CoffesService],
    controllers: [ControllerController],
})
export class CoffeModule {}
