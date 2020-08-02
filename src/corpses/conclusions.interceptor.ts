import { Injectable, NestInterceptor, ExecutionContext, CallHandler, ArgumentsHost, Catch, BadGatewayException, HttpException } from "@nestjs/common";
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'
import { CorpsesService } from "./corpses.service";

@Injectable()
export class ConclusionsInter implements NestInterceptor {
    constructor(private corpses: CorpsesService) {}
    intercept(ctx: ArgumentsHost, f: CallHandler) {
        const c = ctx.switchToHttp()
        const request = c.getRequest()
        console.log(request.url)
        return f.handle()
        .pipe(
            catchError(err => {
                const object = this.corpses.kill(request.method, 'Beep', request.url, request.referrer, err.status);
                console.log(object)
                return throwError(err)
            }),
            tap(data => {
                const object = this.corpses.kill(request.method, 'Beep', request.url, request.referrer, '201');
                console.log(object) 
            })
        )
    }
}