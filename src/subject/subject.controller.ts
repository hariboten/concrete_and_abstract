import { Controller, Get, Param, ParseIntPipe, Post, Body } from '@nestjs/common';
import { Subject } from '@prisma/client';
import { SubjectDto } from './dto/subject.dto';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
    constructor(private readonly subjectService: SubjectService) { }

    @Get("room/:id")
    async getSubjectsByRoomID(@Param("id", ParseIntPipe) roomId: number): Promise<Subject[]> {
        return await this.subjectService.getSubjectsByRoomID(roomId);
    }

    @Post()
    async createSubject(@Body() dto: SubjectDto): Promise<Subject> {
        return await this.subjectService.createSubject(dto);
    }

    @Post("bulk")
    async createSubjects(@Body() dto: [SubjectDto]): Promise<number> {
        return await this.subjectService.createSubjects(dto);
    }
}
