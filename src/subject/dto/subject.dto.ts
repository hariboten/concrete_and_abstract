import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class SubjectDto {
    @IsNumber()
    @IsNotEmpty()
    roomId: number;

    @IsString()
    @IsNotEmpty()
    title: string;
}