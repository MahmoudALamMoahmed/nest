import { IsString, MinLength, MaxLength } from 'class-validator';

export class SignUpDto {
  @IsString()
  @MinLength(3)
  @MaxLength(15)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  password: string;
}

export class LoginDto {
  @IsString()
  @MinLength(3)
  @MaxLength(15)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  password: string;
}
