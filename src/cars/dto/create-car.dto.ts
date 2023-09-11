import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly brand: string;

  @IsString()
  // custom message: @IsString({ message: 'The brand most be a cool string' })
  readonly model: string;
}
