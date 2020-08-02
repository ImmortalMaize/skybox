import { Corpse } from './corpses.sch';
export declare class CorpsesService {
    constructor();
    private corpses;
    kill(type1: 'GET' | 'POST' | 'PATCH' | 'DELETE', type2: string, urlTo: string, urlFrom: string, response: string): Corpse;
}
