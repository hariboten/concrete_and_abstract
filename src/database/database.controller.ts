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

    @Get()
    getAnswers() {
        return this.dbService.getAnswers(1)
    }

    @Post()
    createTask(@Body() dto: AnswerDto): Promise<Answer> {
        return this.dbService.sendAnswer(dto);
    }

}
