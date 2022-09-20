import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    UseGuards,
    Req,
} from '@nestjs/common';
import { Answer } from '@prisma/client';
import { DatabaseService } from './database.service';
import { AnswerDto } from './dto/answer.dto';

@Controller('database')
export class DatabaseController {
    constructor(private readonly dbService: DatabaseService) { }

    @Get(":id")
    getAnswersBySubjectId(@Param("id", ParseIntPipe) subjectId: number,) {
        return this.dbService.getAnswersBySubjectId(subjectId)
    }

    @Post()
    sendAnswer(@Body() dto: AnswerDto): Promise<Answer> {
        return this.dbService.sendAnswer(dto);
    }

}
