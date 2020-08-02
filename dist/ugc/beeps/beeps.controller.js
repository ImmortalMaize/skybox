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
const conclusions_interceptor_1 = require("../../corpses/conclusions.interceptor");
const conclusions_service2_1 = require("../../corpses/conclusions.service2");
let BeepsController = class BeepsController {
    constructor(service, conclusions2) {
        this.service = service;
        this.conclusions2 = conclusions2;
    }
    save(input) {
        const res = this.service.save(input.title, input.author, input.blurb, input.tags);
        return res;
    }
    searchAll() {
        return this.service.search();
    }
    searchMany(input) {
        return this.service.search(input);
    }
    searchId(id) {
        return this.service.searchOne({ publicId: id });
    }
    searchHx(id) {
        return this.service.searchOne({ _id: id });
    }
    async wasteOne(input) {
        return this.service.wasteOne(input);
    }
    async wasteId(id) {
        return this.service.waste({ publicId: id });
    }
    async wasteHx(id) {
        return this.service.waste({ _id: id });
    }
};
__decorate([
    common_1.UseInterceptors(conclusions_interceptor_1.ConclusionsInter),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BeepsController.prototype, "save", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BeepsController.prototype, "searchAll", null);
__decorate([
    common_1.Post('crtxt'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BeepsController.prototype, "searchMany", null);
__decorate([
    common_1.Get('id@:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BeepsController.prototype, "searchId", null);
__decorate([
    common_1.Get('hx@:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BeepsController.prototype, "searchHx", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BeepsController.prototype, "wasteOne", null);
__decorate([
    common_1.Delete('id@:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BeepsController.prototype, "wasteId", null);
__decorate([
    common_1.Delete('hx@:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BeepsController.prototype, "wasteHx", null);
BeepsController = __decorate([
    common_1.Controller('b'),
    __metadata("design:paramtypes", [beeps_service_1.BeepsService, conclusions_service2_1.ConclusionsService2])
], BeepsController);
exports.BeepsController = BeepsController;
//# sourceMappingURL=beeps.controller.js.map