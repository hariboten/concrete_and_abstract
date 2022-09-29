import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Room } from '@prisma/client';
import { RoomDto } from './dto/room.dto';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
    constructor(private readonly roomService: RoomService) { }

    @Post()
    async create(): Promise<Room> {
        return this.roomService.create()
    }

    @Get(":id")
    async getByID(@Param("id", ParseIntPipe) roomId: number): Promise<Room> {
        return this.roomService.getByID(roomId);
    }
}
