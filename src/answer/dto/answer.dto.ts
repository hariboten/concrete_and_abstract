import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class AnswerDto {
    @IsNumber()
    @IsNotEmpty()
    roomId: number;

    @IsString()
    @IsNotEmpty()
    answer: string;
}