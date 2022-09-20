import { Controller, Get } from '@nestjs/common';
import {AnswerRepository} from 'src/answer-repository';

@Controller('answers')
export class AnswersController {
	constructor(private readonly answerRepository: AnswerRepository) {}

	@Get()
	getAllAnswer(): Array<string> {
		return this.answerRepository.getAllAnswer();
	}
}
