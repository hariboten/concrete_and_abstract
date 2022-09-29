import { Body, Controller, Get, Post, Param, ParseIntPipe } from '@nestjs/common';
import { AnswerDto } from './dto/answer.dto';
import { Answer } from '@prisma/client';
import { AnswerService } from './answer.service';

@Controller('answer')
export class AnswerController {
    constructor(private readonly appService: AnswerService) { };

    @Get('room/:id')
    async getAllAnswers(@Param('id', ParseIntPipe) roomId: number,): Promise<Answer[]> {
        return this.appService.getAllAnswersByRoomID(roomId);
    }

    @Post()
    async postAnswer(@Body() dto: AnswerDto): Promise<Answer> {
        return this.appService.postAnswer(dto);
    }
}
