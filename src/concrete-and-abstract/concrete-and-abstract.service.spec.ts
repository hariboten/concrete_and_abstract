import { Test, TestingModule } from '@nestjs/testing';
import {async} from 'rxjs';
import { ConcreteAndAbstractService } from './concrete-and-abstract.service';
import {FakeAnswersRepository} from './fake-answers-repository';
import {FakeSubjectsRepository} from './fake-subjects-repository';

describe('ConcreteAndAbstractService', () => {
  let service: ConcreteAndAbstractService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
		  ConcreteAndAbstractService,
		  FakeAnswersRepository,
		  FakeSubjectsRepository,
	  ],
    }).compile();

    service = module.get<ConcreteAndAbstractService>(ConcreteAndAbstractService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return subjects', async () => {
	  const expected = ['subject1', 'subject2', 'subject3'];
	  expect(await service.getSubject()).
		  toEqual(expected);
  });

  it('should return anaswers', async () => {
	  const expected = ['animal', 'pets', 'food'];
	  expect(await service.getAllAnswers()).toEqual(expected)
  });

  it('should post answer', async () => {
	  const expected = ['animal', 'pets', 'food', 'added answer'];
	  await service.postAnswer('added answer');
	  expect(await service.getAllAnswers()).toEqual(expected);
  });
});
