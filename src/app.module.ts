import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IssamController } from './issam/issam.controller';
import { CoffesService } from './coffes/coffes.service';

@Module({
  imports: [],
  controllers: [AppController, IssamController],
  providers: [AppService, CoffesService],
})
export class AppModule {}
