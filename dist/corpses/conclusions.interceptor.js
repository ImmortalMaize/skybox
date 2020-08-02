"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConclusionsInter = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const corpses_service_1 = require("./corpses.service");
let ConclusionsInter = class ConclusionsInter {
    constructor(corpses) {
        this.corpses = corpses;
    }
    intercept(ctx, f) {
        const c = ctx.switchToHttp();
        const request = c.getRequest();
        console.log(request.url);
        return f.handle()
            .pipe(operators_1.catchError(err => {
            const object = this.corpses.kill(request.method, 'Beep', request.url, request.referrer, err.status);
            console.log(object);
            return rxjs_1.throwError(err);
        }), operators_1.tap(data => {
            const object = this.corpses.kill(request.method, 'Beep', request.url, request.referrer, '201');
            console.log(object);
        }));
    }
};
ConclusionsInter = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [corpses_service_1.CorpsesService])
], ConclusionsInter);
exports.ConclusionsInter = ConclusionsInter;
//# sourceMappingURL=conclusions.interceptor.js.map