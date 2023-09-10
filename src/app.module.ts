import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IssamController } from './issam/issam.controller';

@Module({
  imports: [],
  controllers: [AppController, IssamController],
  providers: [AppService],
})
export class AppModule {}
