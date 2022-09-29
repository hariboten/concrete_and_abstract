import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Answer } from '@prisma/client';
import { VoteDto } from './dto/vote.dto';
import { VoteService } from './vote.service';

@Controller('vote')
export class VoteController {
    constructor(private readonly voteService: VoteService) { }


    @Post()
    async vote(@Body() dto: VoteDto): Promise<Answer> {
        return this.voteService.vote(dto);
    }

    @Get("result/:id")
    async result(@Param("id", ParseIntPipe) subjectId: number): Promise<Answer[]> {
        return this.voteService.getResults(subjectId);
    }

}
