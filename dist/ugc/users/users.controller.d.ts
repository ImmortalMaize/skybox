import { UsersService } from './users.service';
import { CorpsesService } from '../../corpses/corpses.service';
import { ConclusionsService2 } from '../../corpses/conclusions.service2';
export declare class UsersController {
    private service;
    private corpses;
    private conclusions2;
    constructor(service: UsersService, corpses: CorpsesService, conclusions2: ConclusionsService2);
    save(alias: string, password: string, email: string, { bio }: {
        bio: any;
    }): Promise<any>;
    searchAll(): Promise<any>;
    searchMany(input: any): Promise<any>;
    searchId(id: number): Promise<any>;
    searchHx(id: any): Promise<any>;
    wasteOne(input: any): Promise<void>;
    wasteId(id: number): Promise<void>;
    wasteHx(id: any): Promise<void>;
}
