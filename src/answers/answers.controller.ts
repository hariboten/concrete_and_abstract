import { Controller, Get } from '@nestjs/common';
import {DatabaseAnswerRepository} from 'src/database-answer-repository';
import {LocalAnswerRepository} from 'src/local-answer-repository';

@Controller('answers')
export class AnswersController {
	constructor(private readonly answerRepository: DatabaseAnswerRepository) {}

	@Get()
	getAllAnswer(): Promise<string[]> {
		return this.answerRepository.getAllAnswer();
	}
}
