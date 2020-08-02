import { NestInterceptor, CallHandler, ArgumentsHost } from "@nestjs/common";
import { CorpsesService } from "./corpses.service";
export declare class ConclusionsInter implements NestInterceptor {
    private corpses;
    constructor(corpses: CorpsesService);
    intercept(ctx: ArgumentsHost, f: CallHandler): import("rxjs").Observable<any>;
}
