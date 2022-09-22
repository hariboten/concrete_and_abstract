import { Injectable } from '@nestjs/common';

@Injectable()
export class ConcreteAndAbstractService {
	getSubject(): string[] {
		return ['subject1', 'subject2', 'subject3'];
	}

}
