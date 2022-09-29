import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) { }

    async create(dto: UserDto): Promise<User> {
        const user = await this.prisma.user.create({
            data: {
                ...dto
            }
        })

        return user
    }

    async getByID(userId: number): Promise<User> {
        const user = await this.prisma.user.findFirst({
            where: {
                id: userId
            }
        });

        return user;
    }
}
