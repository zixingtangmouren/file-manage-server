import { IsNotEmpty, MinLength } from 'class-validator';

export class RegisterUserDto {
  /**
   * User's username
   */
  @IsNotEmpty()
  @MinLength(6, { message: '不能小于 6 个字符' })
  username: string;

  /**
   * User's password
   */
  @IsNotEmpty()
  password: string;
}
