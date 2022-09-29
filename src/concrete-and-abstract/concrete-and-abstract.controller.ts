import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import {Answer} from './answer';
import {ConcreteAndAbstractService} from './concrete-and-abstract.service';
import {AnswerDto} from './dto/answer.dto';
import {VoteDto} from './dto/vote.dto';
import {Room} from './room';

@Controller('concrete-and-abstract')
export class ConcreteAndAbstractController {
	constructor(private readonly appService: ConcreteAndAbstractService) {};

	@Get('subjects/:roomId')
	async getSubject(@Param('roomId', ParseIntPipe) roomId: number) {
		return this.appService.getSubject(new Room(roomId));
	}

	@Get('answers/:roomId')
	async getAllAnswers(@Param('roomId', ParseIntPipe) roomId: number): Promise<string[]> {
		return this.appService.getAllAnswers(new Room(roomId));
	}

	@Post('answers/:roomId')
    async postAnswer(@Body() dto: AnswerDto, @Param('roomId', ParseIntPipe) roomId: number): Promise<Answer> {
		return this.appService.postAnswer(new Room(roomId), dto.answer);
    }

	@Post('vote/:roomId')
	async postVote(@Body() dto: VoteDto, @Param('roomId', ParseIntPipe) roomId: number): Promise<string> {
		return (await this.appService.postVote(new Room(roomId), dto.answer)).answer;
	}

	@Get('results/:roomId')
	async getResults(@Param('roomId', ParseIntPipe) roomId: number): Promise<Answer[]> {
		return this.appService.getResults(new Room(roomId));
	}

	@Get('subjects')
	async getSubjectDefaultRoom() {
		return this.appService.getSubject(new Room(1));
	}

	@Get('answers')
	async getAllAnswersDefaultRoom(): Promise<string[]> {
		return this.appService.getAllAnswers(new Room(1));
	}

	@Post('answers')
    async postAnswerDefaultRoom(@Body() dto: AnswerDto): Promise<Answer> {
		return this.appService.postAnswer(new Room(1), dto.answer);
    }

	@Post('vote')
	async postVoteDefaultRoom(@Body() dto: VoteDto): Promise<string> {
		return (await this.appService.postVote(new Room(1), dto.answer)).answer;
	}

	@Get('results')
	async getResultsDefaultRoom(): Promise<Answer[]> {
		return this.appService.getResults(new Room(1));
	}
}
