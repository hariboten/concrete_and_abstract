import { Module } from '@nestjs/common';
import {DatabaseAnswerRepository} from 'src/database-answer-repository';
import {LocalAnswerRepository} from 'src/local-answer-repository';
import {PrismaModule} from 'src/prisma/prisma.module';
import { AnswerController } from './answer.controller';

@Module({
  imports: [PrismaModule],
  controllers: [AnswerController],
  providers: [DatabaseAnswerRepository]
})
export class AnswerModule {}
