import { Test, TestingModule } from '@nestjs/testing';
import { ConcreteAndAbstractService } from './concrete-and-abstract.service';

describe('ConcreteAndAbstractService', () => {
  let service: ConcreteAndAbstractService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConcreteAndAbstractService],
    }).compile();

    service = module.get<ConcreteAndAbstractService>(ConcreteAndAbstractService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
