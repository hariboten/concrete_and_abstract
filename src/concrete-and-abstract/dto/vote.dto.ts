import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class VoteDto {
    @IsString()
    @IsNotEmpty()
    subjectId: number;

    @IsString()
    @IsNotEmpty()
    user: string;

    @IsString()
    @IsNotEmpty()
	answer: string;
}
