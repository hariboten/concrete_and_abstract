import { Injectable } from '@nestjs/common';

@Injectable()
export class FakeAnswersRepository implements AnswerRepository {
	private static readonly answers: string[] = [];


	async getAllAnswer(): Promise<string[]> {
		return FakeAnswersRepository.answers;
	}

	postAnswer(ans: string) {
		FakeAnswersRepository.answers.push(ans);
	}
}
