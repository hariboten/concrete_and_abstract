import { Test, TestingModule } from '@nestjs/testing';
import { ConcreteAndAbstractController } from './concrete-and-abstract.controller';

describe('ConcreteAndAbstractController', () => {
  let controller: ConcreteAndAbstractController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConcreteAndAbstractController],
    }).compile();

    controller = module.get<ConcreteAndAbstractController>(ConcreteAndAbstractController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
