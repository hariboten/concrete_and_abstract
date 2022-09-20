import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseAnswerRepository } from './database-answer-repository';

describe('DatabaseAnswerRepository', () => {
  let provider: DatabaseAnswerRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatabaseAnswerRepository],
    }).compile();

    provider = module.get<DatabaseAnswerRepository>(DatabaseAnswerRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
