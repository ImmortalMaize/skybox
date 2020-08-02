import { User } from './users.model';
import { ConclusionsService2 } from 'src/corpses/conclusions.service2';
export declare class UsersService {
    private conclusions;
    constructor(conclusions: ConclusionsService2);
    readonly users: User[];
    insertUser(alias: string, email: string, password: string, bio: string): void | {
        publicId: number;
        alias: string;
        email: string;
        password: string;
        bio: string;
        comments: any[];
    };
    findUserEmail(email: string): Promise<any>;
    searchAll(): User[];
    searchOne(id: any): any;
    deleteUser(id: any): User[];
}
