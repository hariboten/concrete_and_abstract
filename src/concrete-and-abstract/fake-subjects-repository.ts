import {Injectable} from "@nestjs/common";
import {Room} from "./room";
import {SubjectsRepository} from "./subjects-repository";

@Injectable()
export class FakeSubjectsRepository implements SubjectsRepository {
	private readonly subjectsRepository: Map<number, string[]>;

	constructor() {
		this.subjectsRepository = new Map<number, string[]>;
		  this.subjectsRepository.set(1, ['犬', '猿', '雉']);
		  this.subjectsRepository.set(2, ['人', '組織', '社会']);
	}
	getSubjects(room: Room): string[] {
		return this.subjectsRepository.get(room.id)
	}
}
