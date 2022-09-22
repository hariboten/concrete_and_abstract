import { Test, TestingModule } from '@nestjs/testing';
import { ConcreteAndAbstractController } from './concrete-and-abstract.controller';
import {ConcreteAndAbstractService} from './concrete-and-abstract.service';
import {FakeAnswersRepository} from './fake-answers-repository';
import {FakeSubjectsRepository} from './fake-subjects-repository';

describe('ConcreteAndAbstractController', () => {
  let controller: ConcreteAndAbstractController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConcreteAndAbstractController],
      providers: [
		  ConcreteAndAbstractService,
		  FakeAnswersRepository,
		  FakeSubjectsRepository,
	  ],
    }).compile();

    controller = module.get<ConcreteAndAbstractController>(ConcreteAndAbstractController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
