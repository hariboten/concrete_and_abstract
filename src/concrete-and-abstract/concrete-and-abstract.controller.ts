import { Body, Controller, Get, Post } from '@nestjs/common';
import {ConcreteAndAbstractService} from './concrete-and-abstract.service';
import {AnswerDto} from './dto/answer.dto';
import {VoteDto} from './dto/vote.dto';

@Controller('concrete-and-abstract')
export class ConcreteAndAbstractController {
	constructor(private readonly appService: ConcreteAndAbstractService) {};

	@Get('subjects')
	async getSubject() {
		return this.appService.getSubject();
	}

	@Get('answers')
	async getAllAnswers(): Promise<string[]> {
		return this.appService.getAllAnswers();
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
