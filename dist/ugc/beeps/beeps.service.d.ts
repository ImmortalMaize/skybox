import { Beep } from './schemas/beep.sch';
import { ConclusionsService2 } from 'src/corpses/conclusions.service2';
import { Model } from 'mongoose';
export declare class BeepsService {
    private conclusions;
    private model;
    constructor(conclusions: ConclusionsService2, model: Model<Beep>);
    private readonly beeps;
    save(title: string, creator: number, blurb?: string, tags?: string[]): void;
    searchOne(object: any): Promise<any>;
    search(object?: any): Promise<any>;
    patchOne(object: any, options: any, callback: any): void;
    patch(options: any, callback: any, object?: any): void;
    wasteOne(object: any): void;
    waste(object: any): void;
}
