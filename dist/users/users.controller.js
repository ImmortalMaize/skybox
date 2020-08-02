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
const corpses_service_1 = require("../corpses/corpses.service");
const conclusions_service2_1 = require("../corpses/conclusions.service2");
const conclusions_service1_1 = require("../corpses/conclusions.service1");
let UsersController = class UsersController {
    constructor(users, corpses, conclusions1, conclusions2) {
        this.users = users;
        this.corpses = corpses;
        this.conclusions1 = conclusions1;
        this.conclusions2 = conclusions2;
    }
    insertUser(alias, email, password, bio, response, request) {
        const user = this.users.insertUser(alias, email, password, (bio ? bio : ""));
        return user;
    }
    getAll() {
        return this.users.searchAll();
    }
    deleteUser(id) {
        return this.users.deleteUser(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('alias')),
    __param(1, common_1.Body('email')),
    __param(2, common_1.Body('password')),
    __param(3, common_1.Body('bio')),
    __param(4, common_1.Res()),
    __param(5, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Object, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "insertUser", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAll", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Body('publicId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteUser", null);
UsersController = __decorate([
    common_1.Controller('u'),
    __metadata("design:paramtypes", [users_service_1.UsersService, corpses_service_1.CorpsesService, conclusions_service1_1.ConclusionsService1, conclusions_service2_1.ConclusionsService2])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map