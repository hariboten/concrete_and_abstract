import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ConcreteAndAbstractModule } from './concrete-and-abstract/concrete-and-abstract.module';
import { SubjectModule } from './subject/subject.module';
import { AnswerModule } from './answer/answer.module';
import { VoteModule } from './vote/vote.module';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ConcreteAndAbstractModule,
    SubjectModule,
    AnswerModule,
    VoteModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
