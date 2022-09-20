import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SubjectModule } from './subject/subject.module';
import { AnswersModule } from './answers/answers.module';
import { CatsService } from './cats/cats.service';
import { LocalAnswerRepository } from './local-answer-repository';
import { AnswerModule } from './answer/answer.module';

@Module({
  imports: [AuthModule, SubjectModule, AnswersModule, AnswerModule],
  controllers: [AppController],
  providers: [AppService, LocalAnswerRepository],
})
export class AppModule {}
