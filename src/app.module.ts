import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ConcreteAndAbstractModule } from './concrete-and-abstract/concrete-and-abstract.module';

@Module({
  imports: [PrismaModule, ConfigModule.forRoot({ isGlobal: true }), ConcreteAndAbstractModule,],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
