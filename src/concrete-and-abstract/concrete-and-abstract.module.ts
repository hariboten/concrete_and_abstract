import { Module } from '@nestjs/common';
import {ConcreteAndAbstractController} from './concrete-and-abstract.controller';
import { ConcreteAndAbstractService } from './concrete-and-abstract.service';
import {FakeAnswersRepository} from './fake-answers-repository';
import {FakeSubjectsRepository} from './fake-subjects-repository';

@Module({
  controllers: [ConcreteAndAbstractController],
  providers: [
	  ConcreteAndAbstractService, 
	  FakeSubjectsRepository,
	  FakeAnswersRepository
  ]
})
export class ConcreteAndAbstractModule {}
