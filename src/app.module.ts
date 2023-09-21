import { Module } from '@nestjs/common';
import { CoffesService } from './coffes/coffes.service';
import { ControllerController } from './coffes/controller/controller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { type } from 'os';
import { CoffeModule } from './coffes/coffe.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass1337',
    database: 'issam_db',
    autoLoadEntities: true,
    synchronize: true,
  }), CoffeModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
