import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Room } from '@prisma/client';

@Injectable()
export class RoomService {
    constructor(private readonly prisma: PrismaService) { }

    async create(): Promise<Room> {
        const room = await this.prisma.room.create({ data: {} });

        return room;
    }


    async getByID(roomId: number): Promise<Room> {
        const room = await this.prisma.room.findFirst({
            where: {
                id: roomId
            }
        });
        return room;
    }
}
