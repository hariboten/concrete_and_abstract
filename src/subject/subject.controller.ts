import { Controller, Get, Param, ParseIntPipe, Post, Body } from '@nestjs/common';
import { Subject } from '@prisma/client';
import { SubjectDto } from './dto/subject.dto';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
    constructor(private readonly subjectService: SubjectService) { }

    @Get(":id")
    async getSubjectByID(@Param("id", ParseIntPipe) id: number): Promise<string[]> {
        return await this.subjectService.getSubjectByID(id);
    }

    @Post()
    async createSubject(@Body() dto: SubjectDto): Promise<Subject> {
        return await this.subjectService.createSubject(dto);
    }
}
