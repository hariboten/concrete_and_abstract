import { Injectable } from '@nestjs/common';

@Injectable()
export class LocalAnswerRepository {
	private static readonly answers: Array<string> = ["animal", "pets", "food"];


	getAllAnswer(): Array<string> {
		console.log(LocalAnswerRepository.answers)
		return LocalAnswerRepository.answers;
	}

	postAnswer(ans: string) {
		LocalAnswerRepository.answers.push(ans);
	}
}
