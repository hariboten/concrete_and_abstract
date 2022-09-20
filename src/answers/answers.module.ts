import { Module } from '@nestjs/common';
import {DatabaseAnswerRepository} from 'src/database-answer-repository';
import {LocalAnswerRepository} from 'src/local-answer-repository';
import {PrismaModule} from 'src/prisma/prisma.module';
import { AnswersController } from './answers.controller';

@Module({
  imports: [PrismaModule],
  controllers: [AnswersController],
  providers: [DatabaseAnswerRepository]
})
export class AnswersModule {}
