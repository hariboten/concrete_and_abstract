import { Injectable } from '@nestjs/common';
import {ResultDto} from './dto/result.dto';
import {FakeAnswersRepository} from './fake-answers-repository';
import {FakeSubjectsRepository} from './fake-subjects-repository';

@Injectable()
export class ConcreteAndAbstractService {
	constructor(
		private readonly subjectsRepository: FakeSubjectsRepository,
		private readonly answersRepository: FakeAnswersRepository
	) {};

	async getSubject(): Promise<string[]> {
		return this.subjectsRepository.getSubjects();
	}
	async getAllAnswers(): Promise<string[]> {
		return this.answersRepository.getAllAnswer();
	}
	async postAnswer(answer: string) {
		return this.answersRepository.postAnswer(answer);
	}

	async postVote(answer: string): Promise<ResultDto> {
		throw new Error('Method not implemented.');
	}
	async getResult(): Promise<ResultDto[]> {
		throw new Error('Method not implemented.');
	}
}
