import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/register.dto';
import { SigninDTO } from './dto/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  register(
    @Body() registerDto: RegisterDTO
  ): any {
    return this.authService.register(registerDto);
  }

  @Post('signin')
  async signin(
    @Body() signinDto: SigninDTO
  ): Promise<any> {
    return await this.authService.signin(signinDto);
  }
}
