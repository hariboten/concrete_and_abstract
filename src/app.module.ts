import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubjectModule } from './subject/subject.module';
import { AnswersModule } from './answers/answers.module';
import { AnswerRepository } from './answer-repository';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [SubjectModule, AnswersModule, DatabaseModule, PrismaModule, ConfigModule.forRoot({ isGlobal: true }),],
  controllers: [AppController],
  providers: [AppService, AnswerRepository],
})
export class AppModule { }
