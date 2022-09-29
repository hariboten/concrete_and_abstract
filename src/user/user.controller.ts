import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async create(@Body() dto: UserDto): Promise<User> {
        return this.userService.create(dto);
    }

    @Get(":id")
    async getByID(@Param("id", ParseIntPipe) userId: number): Promise<User> {
        return this.userService.getByID(userId);
    }
}
