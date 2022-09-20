interface AnswerRepository {
	postAnswer(answer: string): void;
	getAllAnswer(): Array<string>;
}
