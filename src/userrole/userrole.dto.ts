import { IsNotEmpty } from 'class-validator';

export class UserroleDTO {
  @IsNotEmpty()
  name: string;
}
