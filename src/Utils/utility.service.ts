import * as Bcrypt from 'bcrypt';
// import { JwtService } from '@nestjs/jwt'
export class Utility {
    constructor(
        // private readonly jwtService: JwtService
    ) {}
    async hashPassword(pass: string) {
        const salt = await Bcrypt.genSalt(10);
        const hash = Bcrypt.hash(pass, salt);
        return hash;
    }

    async comparePassword(pass: string, hash: string) {
        try {
            console.log(pass, hash);
            const isValid = await Bcrypt.compare(hash, pass);
            console.log(isValid);
            return isValid;
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    // async createToken(data) {
    //     try {
    //         const secret = "secret";
    //         console.log(secret);
            
    //         const token = this.jwtService.sign(data)
    //         return token;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}