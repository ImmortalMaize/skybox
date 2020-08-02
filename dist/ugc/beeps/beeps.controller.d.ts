import { BeepsService } from './beeps.service';
import { ConclusionsService2 } from 'src/corpses/conclusions.service2';
import { beepSaveDTO } from './schemas/beep.save.dto';
export declare class BeepsController {
    private service;
    private conclusions2;
    constructor(service: BeepsService, conclusions2: ConclusionsService2);
    save(input: beepSaveDTO): void;
    searchAll(): Promise<any>;
    searchMany(input: any): Promise<any>;
    searchId(id: number): Promise<any>;
    searchHx(id: any): Promise<any>;
    wasteOne(input: any): Promise<void>;
    wasteId(id: any): Promise<void>;
    wasteHx(id: any): Promise<void>;
}
