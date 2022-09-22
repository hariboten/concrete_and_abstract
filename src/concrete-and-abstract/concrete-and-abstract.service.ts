import { Injectable } from '@nestjs/common';
import {Answer} from './answer';
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
		return this.answersRepository
			.getAllAnswers()
			.then((answers) => answers.map((answer) => answer.answer));
	}
	async postAnswer(answerToPost: string): Promise<Answer> {
		const answer = new Answer(answerToPost, 0);
		this.answersRepository.postAnswer(answer);
		return answer;
	}

	async postVote(answerToVote: string): Promise<Answer> {
		return this.answersRepository.getAnswer(answerToVote)
			.then((ans) => new Answer(ans.answer, ans.votes + 1))
			.then((ans) => this.answersRepository.updateAnswer(ans));
	}
	async getResults(): Promise<Answer[]> {
		return this.answersRepository.getAllAnswers();
	}
}
