import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class ResultDto {
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
