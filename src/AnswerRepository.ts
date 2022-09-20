interface AnswerRepository {
	postAnswer(): void;
	getAllAnswer(): Array<string>;
}
