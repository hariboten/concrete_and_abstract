import { Module } from '@nestjs/common';
import {AnswerRepository} from 'src/answer-repository';
import { AnswersController } from './answers.controller';

@Module({
  controllers: [AnswersController],
  providers: [AnswerRepository]
})
export class AnswersModule {}
