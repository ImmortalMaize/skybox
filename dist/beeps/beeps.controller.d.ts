import { BeepsService } from './beeps.service';
import { ConclusionsService2 } from 'src/corpses/conclusions.service2';
export declare class BeepsController {
    private service;
    private conclusions2;
    constructor(service: BeepsService, conclusions2: ConclusionsService2);
    postBeep(title: string, creator: number, blurb: string, tags: string[]): import("./beeps.model").Beep;
    getAll(): import("./beeps.model").Beep[];
    getOne(id: number): void;
    deleteOne(): void;
}
