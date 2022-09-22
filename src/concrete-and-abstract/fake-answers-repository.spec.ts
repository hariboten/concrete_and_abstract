import { FakeAnswersRepository } from "./fake-answers-repository";
import { Answer } from "./answer";

describe('FakeAnswersRepository', () => {
	let repo: FakeAnswersRepository;
	beforeEach(async () => {
		repo = new FakeAnswersRepository();
	});

	it('should storage Answer', () => {
	  const answer1 = new Answer('animal', 0);
	  const answer2 = new Answer('pets', 0);
	  const answer3 = new Answer('food', 0);
	  const expected = [answer1, answer2, answer3];
	  repo.postAnswer(answer1)
	  repo.postAnswer(answer2)
	  repo.postAnswer(answer3)
	  repo.getAllAnswers()
	  	.then((answers) => expect(answers).toEqual(expected))
	});

	it('should get single Answer', () => {
		const answer = new Answer('animal', 0);
	  	repo.postAnswer(answer)
			.then(() => repo.getAnswer('animal'))
			.then((ans) => expect(ans).toEqual(answer))
	});

	it('should update Answer', () => {
	  	const answer = new Answer('animal', 0);
	  	const expected = [new Answer('animal', 1)]

	  	repo.postAnswer(answer);
		repo.getAnswer('animal')
			.then((ans) => new Answer(ans.answer, ans.votes + 1))
			.then((ans) => repo.updateAnswer(ans))
			.then(() => repo.getAllAnswers())
			.then((answers) => expect(answers).toEqual(expected));
	});
});
