import { UsersService } from '../ugc/users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private service;
    private jwtS;
    constructor(service: UsersService, jwtS: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
