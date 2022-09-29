import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class AnswerDto {
    @IsNumber()
    @IsNotEmpty()
    subjectId: number;

    @IsString()
    @IsNotEmpty()
    answer: string;
}