import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CafeController } from './cafe/cafe.controller';

@Module({
  controllers: [AppController, CafeController],
  providers: [AppService],
})
export class AppModule {}