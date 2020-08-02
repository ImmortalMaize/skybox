"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeepsModule = void 0;
const common_1 = require("@nestjs/common");
const beeps_controller_1 = require("./beeps.controller");
const beeps_service_1 = require("./beeps.service");
const auth_module_1 = require("../../auth/auth.module");
const corpses_module_1 = require("../../corpses/corpses.module");
const beep_sch_1 = require("./schemas/beep.sch");
const mongoose_1 = require("@nestjs/mongoose");
let BeepsModule = class BeepsModule {
};
BeepsModule = __decorate([
    common_1.Module({
        imports: [auth_module_1.AuthModule, corpses_module_1.CorpsesModule, mongoose_1.MongooseModule.forFeature([
                {
                    name: 'Beep',
                    schema: beep_sch_1.beepBox
                }
            ])],
        providers: [beeps_service_1.BeepsService],
        controllers: [beeps_controller_1.BeepsController],
    })
], BeepsModule);
exports.BeepsModule = BeepsModule;
//# sourceMappingURL=beeps.module.js.map