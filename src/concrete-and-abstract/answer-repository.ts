interface AnswerRepository {
	postAnswer(answer: string): void;
	getAllAnswer(): Promise<string[]>;
}
