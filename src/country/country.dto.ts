import { IsNotEmpty } from 'class-validator';

export class CountryDTO {
  @IsNotEmpty()
  name: string;
}
