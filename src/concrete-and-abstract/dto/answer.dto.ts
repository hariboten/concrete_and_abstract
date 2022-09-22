import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class AnswerDto {
    @IsString()
    @IsNotEmpty()
    subjectId: number;

    @IsString()
    @IsOptional()
    answer?: string;
}