import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Answer } from '@prisma/client';
import { AnswerDto } from './dto/answer.dto';

@Injectable()
export class AnswerService {
    constructor(private readonly prisma: PrismaService) { }

    getAllAnswersByRoomID(roomId: number): Promise<Answer[]> {
        return this.prisma.answer.findMany({
            where: {
                roomId
            }
        });
    }

    async postAnswer(dto: AnswerDto): Promise<Answer> {
        const answer = await this.prisma.answer.create({
            data: {
                ...dto,
            }
        })

        return answer;
    }
}
