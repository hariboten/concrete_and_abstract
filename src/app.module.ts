import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SubjectModule } from './subject/subject.module';
import { AnswersModule } from './answers/answers.module';
import { Cats } from './cats';
import { CatsService } from './cats/cats.service';
import { AnswerRepository } from './answer-repository';

@Module({
  imports: [AuthModule, SubjectModule, AnswersModule],
  controllers: [AppController],
  providers: [AppService, Cats, CatsService, AnswerRepository],
})
export class AppModule {}
