import { Injectable, ForbiddenException, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AnswerDto } from './dto/answer.dto';
import { Subject } from '@prisma/client';
import { Answer } from '@prisma/client';


@Injectable()
export class DatabaseService {
    constructor(private prisma: PrismaService) { }

    getAnswersBySubjectId(subjectId: number): Promise<Answer[]> {
        return this.prisma.answer.findMany({
            where: {
                subjectId
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }

    async sendAnswer(dto: AnswerDto): Promise<Answer> {
        try {
            const task = await this.prisma.answer.create({
                data: {
                    ...dto,
                },
            });
            return task;
        } catch (error) {
            throw new HttpException("Send Answer Failed", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
