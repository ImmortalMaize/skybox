import { Injectable } from '@nestjs/common';
import { UsersService } from '../ugc/users/users.service';
import { User } from '../ugc/users/schemas/users.sch'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor (private service: UsersService, private jwtS: JwtService) {
      
  }  

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.service.searchEmail(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user) {
    const payload = { username: user.email, sub: user.publicId, perms: user.permissions};
    return {
      access_token: this.jwtS.sign(payload),
    }
  }
}
