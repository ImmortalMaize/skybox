import { Beep } from './beeps.model';
import { ConclusionsService2 } from 'src/corpses/conclusions.service2';
export declare class BeepsService {
    private conclusions;
    constructor(conclusions: ConclusionsService2);
    private readonly beeps;
    insertBeep(title: string, creator: number, blurb?: string, tags?: string[]): Beep;
    findOne(id: number): void;
    findAll(): Beep[];
}
