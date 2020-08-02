export declare class Corpse {
    type1: 'GET' | 'POST' | 'PATCH' | 'DELETE';
    type2: string;
    timestamp: any;
    urlTo: string;
    urlFrom: string;
    response: string;
    constructor(type1: 'GET' | 'POST' | 'PATCH' | 'DELETE', type2: string, timestamp: any, urlTo: string, urlFrom: string, response: string);
}
