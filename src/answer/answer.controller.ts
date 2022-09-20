import { Controller, Param, Post, Query } from '@nestjs/common';
import {LocalAnswerRepository} from 'src/local-answer-repository';

@Controller('answer')
export class AnswerController {
	constructor(private readonly answerRepository: LocalAnswerRepository){}
	@Post()
	postAnswer(@Query("answer") answer: string) {
		this.answerRepository.postAnswer(answer);
	}
}
