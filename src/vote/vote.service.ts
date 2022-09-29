import { HttpException, Injectable } from '@nestjs/common';
import { Answer } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { VoteDto } from './dto/vote.dto';

@Injectable()
export class VoteService {
    constructor(private readonly prisma: PrismaService) { }

    async vote(dto: VoteDto): Promise<Answer> {
        const targetAnswer = await this.prisma.answer.findFirst({
            where: {
                id: dto.answerId
            }
        });

        if (!targetAnswer) {
            throw new HttpException('回答が存在しません', 400);
        }

        targetAnswer.voteCount++;

        return await this.prisma.answer.update({
            where: {
                id: dto.answerId,
            },
            data: {
                ...targetAnswer
            }
        })
    }


    async getResults(subjectId: number): Promise<Answer[]> {
        return await this.prisma.answer.findMany({
            where: {
                subjectId: subjectId,
            },
            orderBy: {
                voteCount: 'desc'
            }
        })
    }
}
