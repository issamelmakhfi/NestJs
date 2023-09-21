import { Module } from '@nestjs/common';
import { CoffesService } from './coffes/coffes.service';
import { ControllerController } from './coffes/controller/controller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { type } from 'os';
import { CoffeModule } from './coffes/coffe.module';
import { DeviceController } from './device/device.controller';
import { Device } from './device/device';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass1337',
    database: 'postgres',
    autoLoadEntities: true,
    synchronize: true,
  }), CoffeModule,
],
  controllers: [DeviceController],
  providers: [Device],
})
export class AppModule {}
