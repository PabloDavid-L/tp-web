import { Module } from '@nestjs/common';
import { TpMainController } from './tp-main.controller';

@Module({
  controllers: [TpMainController],
})
export class TpMainModule {}
