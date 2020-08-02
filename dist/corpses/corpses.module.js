"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorpsesModule = void 0;
const common_1 = require("@nestjs/common");
const corpses_service_1 = require("./corpses.service");
const conclusions_service2_1 = require("./conclusions.service2");
const conclusions_interceptor_1 = require("./conclusions.interceptor");
let CorpsesModule = class CorpsesModule {
};
CorpsesModule = __decorate([
    common_1.Module({
        providers: [corpses_service_1.CorpsesService, conclusions_service2_1.ConclusionsService2, conclusions_interceptor_1.ConclusionsInter],
        exports: [corpses_service_1.CorpsesService, conclusions_service2_1.ConclusionsService2, conclusions_interceptor_1.ConclusionsInter]
    })
], CorpsesModule);
exports.CorpsesModule = CorpsesModule;
//# sourceMappingURL=corpses.module.js.map