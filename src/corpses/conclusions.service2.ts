import { Injectable, HttpStatus, HttpException} from '@nestjs/common'
import { CorpsesService } from './corpses.service'


@Injectable()
export class ConclusionsService2 {
    constructor() {}
    flag(status: number, text: string) {
        throw new HttpException({
            status: status,
            text: text
        }, status)
    }
    rationalize() {}
}