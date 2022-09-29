import {Room} from "./room";

export interface SubjectsRepository {
	getSubjects(room: Room): string[];
}
