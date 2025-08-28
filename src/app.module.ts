import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TpMainModule } from './tp-main/tp-main.module';

@Module({
  imports: [TpMainModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
