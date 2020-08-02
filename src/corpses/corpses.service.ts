import { Injectable} from '@nestjs/common'
import { Corpse } from './corpses.sch'
import moment from 'moment'
@Injectable()
export class CorpsesService {
    constructor(){}

    private corpses: Corpse[] = []
    kill(type1: 'GET' | 'POST' | 'PATCH' | 'DELETE', type2: string, urlTo: string, urlFrom: string, response: string) {
        let now = moment()
        const corpse = new Corpse(type1, type2, now, urlTo, urlFrom, response)
        this.corpses.push(corpse)
        return corpse
    }
}