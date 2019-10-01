import { Test, TestingModule } from '@nestjs/testing';
import { UserroleController } from './userrole.controller';

describe('Userrole Controller', () => {
  let controller: UserroleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserroleController],
    }).compile();

    controller = module.get<UserroleController>(UserroleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
