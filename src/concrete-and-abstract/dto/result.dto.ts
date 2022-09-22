import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class ResultDto {
    @IsString()
    @IsNotEmpty()
	answer: string;

    @IsNumber()
    @IsNotEmpty()
    votes: number;
}
