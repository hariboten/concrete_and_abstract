import {Injectable} from "@nestjs/common";

@Injectable()
export class FakeSubjectsRepository implements SubjectsRepository {
	getSubjects(): string[] {
		return ['subject1', 'subject2', 'subject3'];
	}
}
