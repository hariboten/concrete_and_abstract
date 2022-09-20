import { Test, TestingModule } from '@nestjs/testing';
import { AnswerRepository } from './answer-repository';

describe('AnswerRepository', () => {
  let provider: AnswerRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnswerRepository],
    }).compile();

    provider = module.get<AnswerRepository>(AnswerRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
