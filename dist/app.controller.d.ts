import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
export declare class AppController {
    private readonly appService;
    private service;
    constructor(appService: AppService, service: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    access(req: any): Promise<any>;
}
