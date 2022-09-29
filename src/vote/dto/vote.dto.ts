import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class VoteDto {
    @IsNumber()
    @IsNotEmpty()
    answerId: number;
}
