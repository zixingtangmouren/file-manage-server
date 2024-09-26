import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(@Body() regitserUserDto: RegisterUserDto) {
    return this.userService.regitserUser(regitserUserDto);
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    // TODO: implement login
    return this.userService.loginUser(loginUserDto);
  }
}
