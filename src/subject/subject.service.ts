import { Injectable } from '@nestjs/common';

@Injectable()
export class SubjectService {
	getSubject(): Array<string> {
		return ['dog', 'cat']
	}
}
