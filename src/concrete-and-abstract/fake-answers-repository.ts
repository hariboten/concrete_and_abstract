import { Injectable } from '@nestjs/common';
import { Answer } from './answer';
import {AnswerRepository} from "./AnswerRepository";
import {Room} from './room';

@Injectable()
export class FakeAnswersRepository implements AnswerRepository {
	private readonly answers = new Map<number, Map<string, Answer>>();


	async getAnswer(room: Room, answer: string): Promise<Answer> {
		return this.answers.get(room.id)
			?.get(answer);
	}
	async getAllAnswers(room: Room): Promise<Answer[]> {
		const repo = this.answers.get(room.id)
		return [...this.answers.get(room.id).values()];
	}

	async postAnswer(room: Room, answer: Answer): Promise<Answer> {
		if (!this.answers.has(room.id)) {
			this.answers.set(room.id, new Map<string, Answer>())
		}
		this.answers.get(room.id)?.set(answer.answer, answer);
		return answer
	}

	async updateAnswer(answer: Answer): Promise<Answer> {
		this.answers.get(1)?.set(answer.answer, answer);
		return answer
	}

	async postVote(room: Room, _userName: string, answerToVote: string): Promise<Answer> {
		var repo = this.answers.get(room.id)
		const entry = repo?.get(answerToVote);
		const newEntry = new Answer(entry.answer, entry.votes + 1);
		repo?.set(answerToVote, newEntry);
		return newEntry;
	}

	async countVotes(room: Room, answer: Answer): Promise<number> {
		return this.answers.get(room.id)?.get(answer.answer).votes
	}

}
