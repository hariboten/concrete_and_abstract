import { Module, CacheModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ConcreteAndAbstractModule } from './concrete-and-abstract/concrete-and-abstract.module';
import { SubjectModule } from './subject/subject.module';
import { AnswerModule } from './answer/answer.module';
import { VoteModule } from './vote/vote.module';
import { UserModule } from './user/user.module';
import { RoomModule } from './room/room.module';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ConcreteAndAbstractModule,
    SubjectModule,
    AnswerModule,
    VoteModule,
    UserModule,
    RoomModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
