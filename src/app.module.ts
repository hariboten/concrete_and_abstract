import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubjectModule } from './subject/subject.module';
import { AnswersModule } from './answers/answers.module';

import { LocalAnswerRepository } from './local-answer-repository';
import { AnswerModule } from './answer/answer.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { PrismaModule } from './prisma/prisma.module';
import { DatabaseAnswerRepository } from './database-answer-repository';

@Module({
  imports: [SubjectModule, AnswersModule, AnswerModule, DatabaseModule, PrismaModule, ConfigModule.forRoot({ isGlobal: true }),],

  controllers: [AppController],
  providers: [AppService, LocalAnswerRepository, DatabaseAnswerRepository],
})
export class AppModule { }
