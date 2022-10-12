import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Prisma, Subject } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { SubjectDto } from './dto/subject.dto';
import { HttpService } from "@nestjs/axios";
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class SubjectService {
    constructor(private readonly prisma: PrismaService, private readonly httpService: HttpService) { }

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

    async fetchNews(): Promise<any> {
        // TODO APIはコール数上限があるため、キャッシュかDBを活用
        const config = new ConfigService();
        const url = encodeURI("https://newsapi.org/v2/top-headlines?country=jp&apiKey=" + config.get("NEWS_API_KEY"));
        const result = await lastValueFrom( 
        this.httpService
          .get(url)
          .pipe(map((res) => res.data)), 
        );
        // TODO 取得した複数の記事の中から、ランダムに3つ返す
        return result;
    }
}
