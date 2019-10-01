import { IsNotEmpty } from 'class-validator';

export class RegionDTO {
  @IsNotEmpty()
  name: string;
}
