import { HttpException, Injectable } from '@nestjs/common';
import { Vote } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { VoteDto, VoteResultDto } from './dto/vote.dto';

@Injectable()
export class VoteService {
    constructor(private readonly prisma: PrismaService) { }

    async vote(dto: VoteDto): Promise<Vote> {
        // TODO: 同一ユーザが、同じルームの複数の回答に投票するのを防ぐ
        // TODO: 同一ユーザが、別のルームの回答に投票するのを防ぐ

        const currentVote = await this.prisma.vote.findFirst({
            where: {
                ...dto
            }
        });

        // 同じユーザが複数回同じ回答に投票するのを防ぐ
        if (currentVote) {
            throw new HttpException("同じ回答に対する複数回の投票は出来ません", 400);
        }

        const vote = await this.prisma.vote.create({
            data: {
                ...dto
            }
        });

        return vote;
    }

    async getVoteCounts(roomId: number): Promise<VoteResultDto[]> {
        const answers = await this.prisma.answer.findMany({
            where: {
                roomId: roomId
            },
            include: {
                Vote: true
            }
        });

        let voteCounts: VoteResultDto[] = [];
        answers.forEach((ans) => {
            voteCounts.push({
                "answerId": ans.id,
                "answer": ans.answer,
                "count": ans.Vote.length
            });
        });

        return voteCounts;

    }
}
