import {HttpException, HttpStatus} from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import exp from 'constants';
import { ConcreteAndAbstractService } from './concrete-and-abstract.service';
import {FakeAnswersRepository} from './fake-answers-repository';
import {FakeSubjectsRepository} from './fake-subjects-repository';
import {Room} from './room';

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
	  return service.getSubject(new Room(1))
	  .then((subjects) => expect(subjects).toEqual(expected))
  });

  it('should get different subjects by room id', async () => {
	  const expected1 = ['犬', '猿', '雉'];
	  const expected2 = ['人', '組織', '社会'];
	  return service.getSubject(new Room(1))
	  .then((subjects) => expect(subjects).toEqual(expected1))
	  .then(() => service.getSubject(new Room(2)))
	  .then((subjects) => expect(subjects).toEqual(expected2))
  });

  it('should throw exception in case getting subjects by non-exist room id', () => {
	  const expected = new HttpException('Room Not Found', HttpStatus.NOT_FOUND);
	  expect(service.getSubject(new Room(-1)))
	  	.rejects
		.toEqual(expected);
  });

  it('should test exception', () => {
	 const f = async() => {throw new HttpException('Room Not Found', HttpStatus.NOT_FOUND)}
	 expect(f()).rejects
	 	.toEqual(new HttpException('Room Not Found', HttpStatus.NOT_FOUND));
  });


  it('should post answer', async () => {
	  const expected = ['animal', 'pets', 'food'];
	  return service.postAnswer(new Room(1), 'animal')
		  .then(() => service.postAnswer(new Room(1), 'pets'))
		  .then(() => service.postAnswer(new Room(1), 'food'))
		  .then(() => service.getAllAnswers(new Room(1)))
		  .then((answers) => expect(answers).toEqual(expected));
  });

  it('should post answers to different room', async () => {
	  const expected_room0 = ['animal', 'pets', 'food'];
	  const expected_room1 = ['co-creation', 'mission'];
	  return service.postAnswer(new Room(1), 'animal')
		  .then(() => service.postAnswer(new Room(1), 'pets'))
		  .then(() => service.postAnswer(new Room(1), 'food'))
		  .then(() => service.postAnswer(new Room(2), 'co-creation'))
		  .then(() => service.postAnswer(new Room(2), 'mission'))
		  .then(() => service.getAllAnswers(new Room(1)))
		  .then((answers) => expect(answers).toEqual(expected_room0))
		  .then(() => service.getAllAnswers(new Room(2)))
		  .then((answers) => expect(answers).toEqual(expected_room1));
  })

  it('should vote', async () => {
	  const expected = [
		  {answer: 'animal', votes: 3},
		  {answer: 'pets', votes: 1},
		  {answer: 'food', votes: 0},
	  ];

	  const room = new Room(1);

	  return service.postAnswer(room, 'animal')
		  .then(() => service.postAnswer(room, 'pets'))
		  .then(() => service.postAnswer(room, 'food'))
		  .then(() => service.postVote(room, 'animal'))
		  .then(() => service.postVote(room, 'animal'))
		  .then(() => service.postVote(room, 'animal'))
		  .then(() => service.postVote(room, 'pets'))
		  .then(() => service.getResults(room))
		  .then((result) => expect(result).toEqual(expected));
  })

  it('should vote to different room', async () => {
	  const expectedRoom1 = [
		  {answer: 'animal', votes: 1},
		  {answer: 'pets', votes: 1},
		  {answer: 'food', votes: 0},
	  ];
	  const expectedRoom2 = [
		  {answer: 'co-creation', votes: 1},
		  {answer: 'mission', votes: 1},
	  ];
	  const room1 = new Room(1);
	  const room2 = new Room(2);

	  return service.postAnswer(room1, 'animal')
		  .then(() => service.postAnswer(room1, 'pets'))
		  .then(() => service.postAnswer(room1, 'food'))
		  .then(() => service.postVote(room1, 'animal'))
		  .then(() => service.postVote(room1, 'pets'))
		  .then(() => service.getResults(room1))
		  .then((result) => expect(result).toEqual(expectedRoom1))

		  .then(() => service.postAnswer(room2, 'co-creation'))
		  .then(() => service.postAnswer(room2, 'mission'))
		  .then(() => service.postVote(room2, 'co-creation'))
		  .then(() => service.postVote(room2, 'mission'))
		  .then(() => service.getResults(room2))
		  .then((result) => expect(result).toEqual(expectedRoom2));
  });
});
