import { Controller, Param, Post, Query } from '@nestjs/common';
import {DatabaseAnswerRepository} from 'src/database-answer-repository';
import {LocalAnswerRepository} from 'src/local-answer-repository';

@Controller('answer')
export class AnswerController {
	constructor(private readonly answerRepository: DatabaseAnswerRepository){}
	@Post()
	postAnswer(@Query("answer") answer: string) {
		this.answerRepository.postAnswer(answer);
	}
}
