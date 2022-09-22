import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class VoteDto {
    @IsNumber()
    @IsNotEmpty()
    subjectId: number;

    @IsString()
    @IsNotEmpty()
    user: string;

    @IsString()
    @IsNotEmpty()
	answer: string;
}
