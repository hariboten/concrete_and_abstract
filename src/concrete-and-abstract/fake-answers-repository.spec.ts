import { FakeAnswersRepository } from "./fake-answers-repository";
import { Answer } from "./answer";
import { Room } from "./room";
import {asyncScheduler} from "rxjs";

describe('FakeAnswersRepository', () => {
	let repo: FakeAnswersRepository;
	const defaultRoom = new Room(1);
	beforeEach(async () => {
		repo = new FakeAnswersRepository();
	});

	it('should storage Answer', async () => {
	  const answer1 = new Answer('animal', 0);
	  const answer2 = new Answer('pets', 0);
	  const answer3 = new Answer('food', 0);
	  const expected = [answer1, answer2, answer3];
	  return repo.postAnswer(defaultRoom, answer1)
	  	.then(() => repo.postAnswer(defaultRoom, answer2))
		.then(() => repo.postAnswer(defaultRoom, answer3))
		.then(() => repo.getAllAnswers(defaultRoom))
		.then((answers) => expect(answers).toEqual(expected))
	});

	it('should get single Answer', async () => {
		const answer = new Answer('animal', 0);
	  	return repo.postAnswer(defaultRoom, answer)
			.then(() => repo.getAnswer(defaultRoom, 'animal'))
			.then((ans) => expect(ans).toEqual(answer))
	});

	it('should update Answer', async () => {
	  	const answer = new Answer('animal', 0);
	  	const expected = [new Answer('animal', 1)]

	  	return repo.postAnswer(defaultRoom, answer)
		.then(() => repo.getAnswer(defaultRoom, 'animal'))
			.then((ans) => new Answer(ans.answer, ans.votes + 1))
			.then((ans) => repo.updateAnswer(ans))
			.then(() => repo.getAllAnswers(defaultRoom))
			.then((answers) => expect(answers).toEqual(expected));
	});

	it('sould count Votes', async () => {
		const expected = 2;
	  	const answer = new Answer('animal', 0);

		return repo.postAnswer(defaultRoom, answer)
			.then(() => repo.postVote(defaultRoom, 'user', 'animal'))
			.then(() => repo.postVote(defaultRoom, 'user', 'animal'))
			.then(() => repo.countVotes(defaultRoom, answer))
			.then((c) => expect(c).toBe(expected))
	});
});
