import { Answer } from "./answer";

export interface AnswerRepository {
	getAnswer(answer: string): Promise<Answer>;
	postAnswer(answer: Answer): Promise<Answer>;
	getAllAnswers(): Promise<Answer[]>;
	updateAnswer(answer: Answer): Promise<Answer>;
}
