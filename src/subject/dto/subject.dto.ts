import { Answer } from '@prisma/client';
import { IsString, IsNotEmpty } from 'class-validator';

export class SubjectDto {
    @IsString()
    @IsNotEmpty()
    subject: string;

    answer: Answer[];
}