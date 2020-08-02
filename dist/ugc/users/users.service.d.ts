import { User } from './schemas/users.sch';
import { ConclusionsService2 } from 'src/corpses/conclusions.service2';
import { Model } from 'mongoose';
export declare class UsersService {
    private conclusions;
    private model;
    constructor(conclusions: ConclusionsService2, model: Model<User>);
    readonly users: User[];
    save(alias: string, email: string, password: string, bio: string): Promise<any>;
    searchEmail(email: string): Promise<any>;
    searchOne(object: any): Promise<any>;
    search(object?: any): Promise<any>;
    patchOne(object: any, options: any, callback: any): Promise<void>;
    patch(options: any, callback: any, object?: any): Promise<void>;
    wasteOne(object: any): Promise<void>;
    waste(object: any): Promise<void>;
}
