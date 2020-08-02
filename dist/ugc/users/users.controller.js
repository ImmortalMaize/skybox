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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const corpses_service_1 = require("../../corpses/corpses.service");
const conclusions_service2_1 = require("../../corpses/conclusions.service2");
const encode_text_pipe_1 = require("../shared/pipes/encode.text.pipe");
const hash_pipe_1 = require("../shared/pipes/hash.pipe");
const password_10_pipe_1 = require("../shared/pipes/password.10.pipe");
const unique_email_pipe_1 = require("../shared/pipes/unique.email.pipe");
let UsersController = class UsersController {
    constructor(service, corpses, conclusions2) {
        this.service = service;
        this.corpses = corpses;
        this.conclusions2 = conclusions2;
    }
    async save(alias, password, email, { bio }) {
        const user = await this.service.save(alias, email, password, bio);
        return user;
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
        return this.service.wasteOne({ publicId: id });
    }
    async wasteHx(id) {
        return this.service.wasteOne({ _id: id });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('alias', encode_text_pipe_1.EncodeTextPipe)),
    __param(1, common_1.Body('password', password_10_pipe_1.Password10Pipe, hash_pipe_1.HashPipe)),
    __param(2, common_1.Body('email', unique_email_pipe_1.UniqueEmailPipe)),
    __param(3, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "save", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "searchAll", null);
__decorate([
    common_1.Post('crtxt'),
    __param(0, common_1.Body(encode_text_pipe_1.EncodeTextPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "searchMany", null);
__decorate([
    common_1.Get('id@:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "searchId", null);
__decorate([
    common_1.Get('hx@:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "searchHx", null);
__decorate([
    common_1.Delete('/'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "wasteOne", null);
__decorate([
    common_1.Delete('id@:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "wasteId", null);
__decorate([
    common_1.Delete('hx@:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "wasteHx", null);
UsersController = __decorate([
    common_1.Controller('u'),
    __metadata("design:paramtypes", [users_service_1.UsersService, corpses_service_1.CorpsesService, conclusions_service2_1.ConclusionsService2])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map