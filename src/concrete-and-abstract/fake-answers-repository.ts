import { Injectable } from '@nestjs/common';
import {Answer} from './answer';
import {AnswerRepository} from './answer-repository';

@Injectable()
export class FakeAnswersRepository implements AnswerRepository {
	private readonly answers = new Map<string, Answer>;


	async getAnswer(answer: string): Promise<Answer> {
		return this.answers.get(answer);
	}
	async getAllAnswers(): Promise<Answer[]> {
		return [...this.answers.values()];
	}

	async postAnswer(answer: Answer): Promise<Answer>{
		if (!this.answers.has(answer.answer)) {
			this.answers.set(answer.answer, answer);
		}
		return answer
	}

	async updateAnswer(answer: Answer): Promise<Answer> {
		this.answers.set(answer.answer, answer);
		return answer
	}
}
