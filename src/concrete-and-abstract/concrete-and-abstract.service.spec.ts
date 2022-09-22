import { Test, TestingModule } from '@nestjs/testing';
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
	  const expected = ['犬', '猿', '雉'];
	  service.getSubject().then((subjects) => expect(subjects).toEqual(expected))
  });

  it('should post answer', () => {
	  const expected = ['animal', 'pets', 'food'];
	  service.postAnswer('animal')
		  .then(() => service.postAnswer('pets'))
		  .then(() => service.postAnswer('food'))
		  .then(() => service.getAllAnswers())
		  .then((answers) => expect(answers).toEqual(expected));
  });

  it('should vote', () => {
	  const expected = [
		  {answer: 'animal', votes: 3},
		  {answer: 'pets', votes: 1},
		  {answer: 'food', votes: 0},
	  ];

	  service.postAnswer('animal')
		  .then(() => service.postAnswer('pets'))
		  .then(() => service.postAnswer('food'))
		  .then(() => service.postVote('animal'))
		  .then(() => service.postVote('animal'))
		  .then(() => service.postVote('animal'))
		  .then(() => service.postVote('pets'))
		  .then(() => service.getResults())
		  .then((result) => expect(result).toEqual(expected));
  })
});
