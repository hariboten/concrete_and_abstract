import {Answer} from "./answer";
import {Room} from "./room";


export interface AnswerRepository {
	getAnswer(room: Room, answer: string): Promise<Answer>;
	postAnswer(room: Room, answer: Answer): Promise<Answer>;
	getAllAnswers(room: Room): Promise<Answer[]>;
	updateAnswer(answer: Answer): Promise<Answer>;
	postVote(room: Room, userName: string, answerToVote: string): Promise<Answer>;
	countVotes(room: Room, answer: Answer): Promise<number>;
}

