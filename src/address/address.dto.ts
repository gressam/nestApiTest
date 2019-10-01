import { IsNotEmpty, IsNumber } from 'class-validator';

export class AddressDTO {
  @IsNotEmpty()
  @IsNumber()
  countryId: number;

  @IsNotEmpty()
  @IsNumber()
  regionId: number;

  @IsNotEmpty()
  @IsNumber()
  cityId: number;

  @IsNumber()
  flat: number;

  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  houseNumber: string;

}
