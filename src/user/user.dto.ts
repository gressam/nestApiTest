import { IsNotEmpty } from 'class-validator';

export class UserDTO {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  password: string;

  userRoleId: number;
}
