import { HttpException, Injectable } from '@nestjs/common';
import { Prisma, Subject } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { SubjectDto } from './dto/subject.dto';

@Injectable()
export class SubjectService {
    constructor(private readonly prisma: PrismaService) { }

    async getSubjectsByRoomID(roomId: number): Promise<Subject[]> {
        const subject = await this.prisma.subject.findMany({
            where: {
                roomId: roomId
            }
        });

        if (!subject) {
            throw new HttpException("お題が見つかりませんでした", 404);
        }

        return subject;
    }

    async createSubject(dto: SubjectDto): Promise<Subject> {
        const subject = await this.prisma.subject.create({
            data: {
                ...dto
            }
        })
        return subject;
    }

    async createSubjects(dto: [SubjectDto]): Promise<number> {
        const subjects = await this.prisma.subject.createMany({
            data: dto
        })
        return subjects.count;
    }
}
