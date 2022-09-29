import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class VoteDto {
    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsNumber()
    @IsNotEmpty()
    answerId: number;
}

export class VoteResultDto {
    @IsNumber()
    @IsNotEmpty()
    answerId: number;

    @IsNotEmpty()
    @IsString()
    answer: string;

    @IsNumber()
    @IsNotEmpty()
    count: number;
}
