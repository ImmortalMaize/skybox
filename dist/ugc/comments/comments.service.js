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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const conclusions_service2_1 = require("../../corpses/conclusions.service2");
const moment_1 = __importDefault(require("moment"));
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CommentsService = class CommentsService {
    constructor(conclusions2, model) {
        this.conclusions2 = conclusions2;
        this.model = model;
        this.comments = [];
    }
    async save(author, text, re) {
        const stamp = moment_1.default();
        const existing = await (this.model.countDocuments());
        const publicId = existing + 1;
        const newComment = new this.model({
            publicId,
            author,
            text,
            stamp,
            re,
        });
        await newComment.save();
        return newComment;
    }
    async searchOne(object) {
        const result = await this.model.findOne(object);
        return result;
    }
    async search(object) {
        const result = await this.model.find(object);
        return result;
    }
    patchOne() { }
    patchMany() { }
    wasteOne() { }
    wasteMany() { }
};
CommentsService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_1.InjectModel('Comment')),
    __metadata("design:paramtypes", [conclusions_service2_1.ConclusionsService2, typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map