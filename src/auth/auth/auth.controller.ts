import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto, LoginDto } from '../AuthDto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Post('signup')
  signUp(@Body() signUpDto: SignUpDto) {
    return this._authService.signUp(signUpDto.username, signUpDto.password);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this._authService.login(loginDto.username, loginDto.password);
  }
}
