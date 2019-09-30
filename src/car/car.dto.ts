import { IsString } from 'class-validator';

export class CarDTO {
  @IsString()
  brand: string;

  @IsString()
  model: string;
}
