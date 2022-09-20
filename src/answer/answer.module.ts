import { Module } from '@nestjs/common';
import {LocalAnswerRepository} from 'src/local-answer-repository';
import { AnswerController } from './answer.controller';

@Module({
  controllers: [AnswerController],
  providers: [LocalAnswerRepository]
})
export class AnswerModule {}
