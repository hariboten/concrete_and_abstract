import {Injectable} from "@nestjs/common";

@Injectable()
export class FakeSubjectsRepository implements SubjectsRepository {
	getSubjects(): string[] {
		return ['犬', '猿', '雉'];
	}
}
