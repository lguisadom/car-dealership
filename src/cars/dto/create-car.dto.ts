import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly brand: string;

  @IsString()
  // custom message: @IsString({ message: 'The brand most be a cool string' })
  @MinLength(3)
  readonly model: string;
}
