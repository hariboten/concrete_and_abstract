import { HttpException, Injectable } from '@nestjs/common';
import { Prisma, Subject } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { SubjectDto } from './dto/subject.dto';

@Injectable()
export class SubjectService {
    constructor(private readonly prisma: PrismaService) { }

    async getSubjectByID(id: number): Promise<string[]> {
        const subject = await this.prisma.subject.findFirst({
            where: {
                id: id
            }
        })

        return subject.subject.split(",");
    }

    async createSubject(dto: SubjectDto): Promise<Subject> {
        try {
            const subject = await this.prisma.subject.create({
                data: {
                    ...dto
                }
            })
            return subject;
        } catch (err) {
            if (err instanceof Prisma.PrismaClientKnownRequestError) {
                throw new HttpException('このお題は別の部屋ですでに設定されています。別のお題を設定してください', 400);
            }
            throw new HttpException("サーバエラーが発生しました", 400);
        }
    }
}
