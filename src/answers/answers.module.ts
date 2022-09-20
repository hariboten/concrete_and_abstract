import { Module } from '@nestjs/common';
import {LocalAnswerRepository} from 'src/local-answer-repository';
import { AnswersController } from './answers.controller';

@Module({
  controllers: [AnswersController],
  providers: [LocalAnswerRepository]
})
export class AnswersModule {}
