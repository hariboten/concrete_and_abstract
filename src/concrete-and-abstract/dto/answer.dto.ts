import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class AnswerDto {
    @IsNumber()
    @IsNotEmpty()
    subjectId: number;

    @IsString()
    @IsNotEmpty()
    answer: string;
}
