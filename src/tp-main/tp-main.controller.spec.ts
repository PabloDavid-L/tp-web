import { Test, TestingModule } from '@nestjs/testing';
import { TpMainController } from './tp-main.controller';

describe('TpMainController', () => {
  let controller: TpMainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TpMainController],
    }).compile();

    controller = module.get<TpMainController>(TpMainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
