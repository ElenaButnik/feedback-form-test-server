import { IsNotEmpty } from 'class-validator';

export class ChangeForm {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly message: string;
}
