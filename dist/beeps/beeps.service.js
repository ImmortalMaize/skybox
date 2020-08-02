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
exports.BeepsService = void 0;
const common_1 = require("@nestjs/common");
const beeps_model_1 = require("./beeps.model");
const conclusions_service2_1 = require("../corpses/conclusions.service2");
let BeepsService = class BeepsService {
    constructor(conclusions) {
        this.conclusions = conclusions;
        this.beeps = [];
    }
    insertBeep(title, creator, blurb, tags) {
        if (title && creator) {
            const id = this.beeps.length + 1;
            const beep = new beeps_model_1.Beep(title, creator, blurb, tags);
            this.beeps.push(beep);
            return beep;
        }
        else {
            this.conclusions.flag(410, "No.");
        }
    }
    findOne(id) {
    }
    findAll() {
        return this.beeps;
    }
};
BeepsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [conclusions_service2_1.ConclusionsService2])
], BeepsService);
exports.BeepsService = BeepsService;
//# sourceMappingURL=beeps.service.js.map