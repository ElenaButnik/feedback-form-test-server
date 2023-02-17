import { IsNotEmpty } from 'class-validator';

export class CreateForm {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly message: string;
}
