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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeepsController = void 0;
const common_1 = require("@nestjs/common");
const beeps_service_1 = require("./beeps.service");
const conclusions_interceptor_1 = require("../corpses/conclusions.interceptor");
const conclusions_service2_1 = require("../corpses/conclusions.service2");
let BeepsController = class BeepsController {
    constructor(service, conclusions2) {
        this.service = service;
        this.conclusions2 = conclusions2;
    }
    postBeep(title, creator, blurb, tags) {
        if (title && creator && tags) {
            const res = this.service.insertBeep(title, creator, blurb, tags);
            return res;
        }
        else {
            this.conclusions2.flag(410, "No.");
        }
    }
    getAll() {
        return this.service.findAll();
    }
    getOne(id) {
        if (id) {
            return this.service.findOne(id);
        }
        else {
            throw new common_1.BadRequestException();
        }
    }
    deleteOne() { }
};
__decorate([
    common_1.UseInterceptors(conclusions_interceptor_1.ConclusionsInter),
    common_1.Post(),
    __param(0, common_1.Body('title')),
    __param(1, common_1.Body('creator')),
    __param(2, common_1.Body('blurb')),
    __param(3, common_1.Body('tags')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String, Array]),
    __metadata("design:returntype", void 0)
], BeepsController.prototype, "postBeep", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BeepsController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BeepsController.prototype, "getOne", null);
__decorate([
    common_1.Delete(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BeepsController.prototype, "deleteOne", null);
BeepsController = __decorate([
    common_1.Controller('b'),
    __metadata("design:paramtypes", [beeps_service_1.BeepsService, conclusions_service2_1.ConclusionsService2])
], BeepsController);
exports.BeepsController = BeepsController;
//# sourceMappingURL=beeps.controller.js.map