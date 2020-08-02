import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private service;
    constructor(service: AuthService);
    validate(email: string, password: string): Promise<any>;
}
export {};
