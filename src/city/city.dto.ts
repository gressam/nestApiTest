import { IsNotEmpty } from 'class-validator';

export class CityDTO {
  @IsNotEmpty()
  name;
}
