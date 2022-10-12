import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [PrismaModule, HttpModule],
  controllers: [SubjectController],
  providers: [SubjectService]
})
export class SubjectModule { }
