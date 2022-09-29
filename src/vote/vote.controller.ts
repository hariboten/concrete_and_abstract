import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Answer, Vote } from '@prisma/client';
import { VoteDto } from './dto/vote.dto';
import { VoteService } from './vote.service';

@Controller('vote')
export class VoteController {
    constructor(private readonly voteService: VoteService) { }


    @Post()
    async vote(@Body() dto: VoteDto): Promise<Vote> {
        return this.voteService.vote(dto);
    }

    @Get("room/:id")
    async getVoteCounts(@Param("id", ParseIntPipe) roomId: number) {
        return this.voteService.getVoteCounts(roomId);
    }
}
