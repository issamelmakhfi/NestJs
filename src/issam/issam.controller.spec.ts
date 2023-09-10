import { Test, TestingModule } from '@nestjs/testing';
import { IssamController } from './issam.controller';

describe('IssamController', () => {
  let controller: IssamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IssamController],
    }).compile();

    controller = module.get<IssamController>(IssamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
