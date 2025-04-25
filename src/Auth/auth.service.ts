import { HttpException, Injectable } from '@nestjs/common';
import { RegisterDTO } from './dto/register.dto';
import { UserRepository } from 'src/User/infrastructure/persistance/user.repository';
import { UserDomain } from 'src/User/domain/user.domain';
import { SigninDTO } from './dto/signin.dto';
import { Utility } from 'src/Utils/utility.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly utilityService: Utility,
  ) {}

  async register(data: RegisterDTO): Promise<any> {
    const {name, email, phone, password} = data;
    const savedUser = await this.userRepository.findByEmail(email);
    if(savedUser) {
        throw new HttpException('User already exists', 409);
    }
    const hash = await this.utilityService.hashPassword(password);
    // Save the user in db
    const user: UserDomain = {
      name,
      email,
      phone,
      password: hash,
      isActive: true,
    }
    const savedData = await this.userRepository.create(user);
    if(savedData) {
      return {message: "User created Successfully", statusCode: 201};
    }
    throw new Error('Internal Server Error');
  }

  async signin(data: SigninDTO): Promise<any> {
    const {email, password} = data;
    console.log(data);
    const savedUser = await this.userRepository.findByEmail(email);
    if(!savedUser) {
      throw new HttpException('User not found', 404);
    } else {
      try {
        const isValid = await this.utilityService.comparePassword(password, savedUser.password);
        if(!isValid)
          throw new HttpException('Incorrect password', 401);
        else
          // return this.utilityService.createToken({ email: savedUser.email});
        return isValid
      } catch (error) {
        throw error
      }
    }
  }
}
