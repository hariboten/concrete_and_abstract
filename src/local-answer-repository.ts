import { Injectable } from '@nestjs/common';

@Injectable()
export class LocalAnswerRepository implements AnswerRepository {
	private static readonly answers: string[] = ["animal", "pets", "food"];


	async getAllAnswer(): Promise<string[]> {
		return LocalAnswerRepository.answers;
	}

	postAnswer(ans: string) {
		LocalAnswerRepository.answers.push(ans);
	}
}
