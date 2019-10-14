import { IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class UserInfoDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  surname: string;

  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  phoneNumber: string;
}
