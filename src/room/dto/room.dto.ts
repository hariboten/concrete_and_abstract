import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class RoomDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;
}