import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CafeController } from './cafe/cafe.controller';
import { CafeService } from './cafe/cafe.service';

@Module({
  controllers: [AppController, CafeController],
  providers: [AppService, CafeService],
})
export class AppModule {}