import { CorpsesService } from './corpses.service';
import { Conclusion } from './conclusions.sch';
export declare class ConclusionsService {
    private corpses;
    constructor(corpses: CorpsesService);
    conclude(result: any, request: any, response: any): void;
    preclude(result: object, callback: any): any;
    flag(status: number, text: string): Conclusion;
}
