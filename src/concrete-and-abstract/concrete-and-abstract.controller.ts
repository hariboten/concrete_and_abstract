import { Body, Controller, Get, Post } from '@nestjs/common';
import {Answer} from '@prisma/client';
import {VoteDto} from 'src/database/dto/vote.dto';
import {ConcreteAndAbstractService} from './concrete-and-abstract.service';
import {AnswerDto} from './dto/answer.dto';

@Controller('concrete-and-abstract')
export class ConcreteAndAbstractController {
	constructor(private readonly appService: ConcreteAndAbstractService) {};

	@Get('subjects')
	async getSubject() {
		return ['subject1', 'subject2', 'subject3'];
	}

	@Get('answers')
	async getAllAnswer(): Promise<string[]> {
		return ['Answer1', 'Answer2', 'Answer3'];
	}

	@Post('answers')
    async postAnswer(@Body() dto: AnswerDto): Promise<string> {
        return "recieved answer";
    }

	@Post('vote')
	async postVote(@Body() dto: VoteDto): Promise<string> {
		return "done vote"
	}
}
