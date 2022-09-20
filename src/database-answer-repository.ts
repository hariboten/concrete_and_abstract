import { Injectable } from '@nestjs/common';
import {PrismaService} from './prisma/prisma.service';

@Injectable()
export class DatabaseAnswerRepository implements AnswerRepository{
    constructor(private prisma: PrismaService) { }
	async postAnswer(answer: string): Promise<void> {
       await this.prisma.answer.create({
            data: {
				subjectId: 1,
				answer,
            },
        });
	}
	async getAllAnswer(): Promise<string[]> {
		return this.prisma.answer.findMany({
            where: {
                subjectId: 1
            },
            orderBy: {
                createdAt: 'desc',
            },
        }).then((answers) => answers.map((answer) => answer.answer))
	}
}
