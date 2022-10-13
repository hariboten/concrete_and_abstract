import { HttpException, Injectable, CACHE_MANAGER, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Subject } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { SubjectDto, NewsDto } from './dto/subject.dto';
import { HttpService } from "@nestjs/axios";
import { lastValueFrom, map } from 'rxjs';
import { Cache } from "cache-manager";

@Injectable()
export class SubjectService {
    constructor(
        private readonly prisma: PrismaService, 
        private readonly httpService: HttpService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache
    ) { }

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
        const config = new ConfigService();

        const articlesInCache = await this.cacheManager.get("articles");

        if (articlesInCache) {
            return articlesInCache;
        }

        const url = encodeURI("https://newsapi.org/v2/top-headlines?country=jp&apiKey=" + config.get("NEWS_API_KEY"));
        const result = await lastValueFrom( 
        this.httpService
          .get(url)
          .pipe(map((res) => res.data)), 
        );

        const articles = result["articles"];
        
        await this.cacheManager.set("articles", articles, {ttl: 86400});

        return articles;
    }
}
