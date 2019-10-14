import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class OrderDTO {
  @IsNotEmpty()
  @IsNumber()
  customerId: number;

  @IsNumber()
  @IsOptional()
  executorId: number;

  @IsOptional()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  addressId: number;
}
