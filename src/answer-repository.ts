import { Injectable } from '@nestjs/common';

@Injectable()
export class AnswerRepository {
	private readonly answers: Array<string>;

	constructor() {
		this.answers = ["animal", "pets", "food"];
	}

	getAllAnswer(): Array<string> {
		return this.answers;
	}

	postAnswer(ans: string) {
		this.answers.push(ans);
	}
}
