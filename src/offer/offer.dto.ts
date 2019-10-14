import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class OfferDTO {
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsDate()
  executionDate: Date;

  @IsNotEmpty()
  @IsNumber()
  orderId: number;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  @IsNumber()
  executorId: number;
}
