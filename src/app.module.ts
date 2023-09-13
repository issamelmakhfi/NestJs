import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffesService } from './coffes/coffes.service';
import { ControllerController } from './coffes/controller/controller.controller';

@Module({
  imports: [],
  controllers: [AppController, ControllerController],
  providers: [AppService, CoffesService],
})
export class AppModule {}
