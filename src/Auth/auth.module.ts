import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/User/user.module';
import { Utility } from 'src/Utils/utility.service';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [AuthService, Utility],
})
export class AuthModule {}
