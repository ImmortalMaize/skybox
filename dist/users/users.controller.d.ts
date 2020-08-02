import { UsersService } from './users.service';
import { CorpsesService } from '../corpses/corpses.service';
import { ConclusionsService2 } from '../corpses/conclusions.service2';
import { ConclusionsService1 } from 'src/corpses/conclusions.service1';
export declare class UsersController {
    private users;
    private corpses;
    private conclusions1;
    private conclusions2;
    constructor(users: UsersService, corpses: CorpsesService, conclusions1: ConclusionsService1, conclusions2: ConclusionsService2);
    insertUser(alias: string, email: string, password: string, bio: string, response: Response, request: any): void | {
        publicId: number;
        alias: string;
        email: string;
        password: string;
        bio: string;
        comments: any[];
    };
    getAll(): import("./users.model").User[];
    deleteUser(id: any): import("./users.model").User[];
}
