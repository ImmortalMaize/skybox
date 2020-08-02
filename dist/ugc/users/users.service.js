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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const conclusions_service2_1 = require("../../corpses/conclusions.service2");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
let UsersService = class UsersService {
    constructor(conclusions, model) {
        this.conclusions = conclusions;
        this.model = model;
        this.users = [];
    }
    async save(alias, email, password, bio) {
        const existing = await (this.model.countDocuments());
        const publicId = existing + 1;
        const hash = await bcrypt_1.default.hash(password, 8);
        try {
            const user = new this.model({
                publicId,
                alias,
                email,
                password: hash,
                bio
            });
            await user.save();
            return user;
        }
        catch (err) {
            if (err)
                return err;
        }
    }
    async searchEmail(email) {
        let user = this.users.find(user => user.email === email);
        return user;
    }
    async searchOne(object) {
        const result = await this.model.findOne(object);
        return result;
    }
    async search(object) {
        const result = await this.model.find(object);
        return result;
    }
    async patchOne(object, options, callback) {
        await this.model.updateOne(object, options, callback);
    }
    async patch(options, callback, object) {
        await this.model.update(object, options, callback);
    }
    async wasteOne(object) {
        await this.model.deleteOne(object);
    }
    async waste(object) {
        await this.model.deleteMany(object);
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [conclusions_service2_1.ConclusionsService2, typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map