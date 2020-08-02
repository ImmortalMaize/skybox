import moment from 'moment'

export class Corpse {
    constructor(
        public type1: 'GET' | 'POST' | 'PATCH' | 'DELETE',
        public type2: string,
        public timestamp: any,
        public urlTo: string,
        public urlFrom: string,
        public response: string
    ) {}
}