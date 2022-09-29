import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {Answer} from './answer';
import {Room} from './room';
import {FakeAnswersRepository} from './fake-answers-repository';
import {FakeSubjectsRepository} from './fake-subjects-repository';

@Injectable()
export class ConcreteAndAbstractService {
	constructor(
		private readonly subjectsRepository: FakeSubjectsRepository,
		private readonly answersRepository: FakeAnswersRepository
	) {};

	/* 
	to be duplicated
	*/
	async getSubject(room: Room): Promise<string[]> {
		const subjects = this.subjectsRepository.getSubjects(room);
		if (subjects === undefined) {
			throw new HttpException('Room Not Found', HttpStatus.NOT_FOUND);
		}
		return subjects;
	}

	async getAllAnswers(room: Room): Promise<string[]> {
		return this.answersRepository
			.getAllAnswers(room)
			.then((answers) => answers.map((ans) => ans.answer));
	}
	async postAnswer(room: Room, answerToPost: string): Promise<Answer> {
		const answer = new Answer(answerToPost, 0);
		this.answersRepository.postAnswer(room, answer);
		return answer;
	}

	async postVote(room: Room, answerToVote: string): Promise<Answer> {
		return this.answersRepository.postVote(room, 'user', answerToVote)
	}
	async getResults(room: Room): Promise<Answer[]> {
		return this.answersRepository.getAllAnswers(room);
	}
}
