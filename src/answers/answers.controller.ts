import { Controller, Get } from '@nestjs/common';
import {LocalAnswerRepository} from 'src/local-answer-repository';

@Controller('answers')
export class AnswersController {
	constructor(private readonly answerRepository: LocalAnswerRepository) {}

	@Get()
	getAllAnswer(): Array<string> {
		return this.answerRepository.getAllAnswer();
	}
}
