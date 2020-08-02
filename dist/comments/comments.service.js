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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const comment_sch_1 = require("./comment.sch");
const conclusions_service2_1 = require("../corpses/conclusions.service2");
const users_service_1 = require("../users/users.service");
const users_model_1 = require("../users/users.model");
let CommentsService = class CommentsService {
    constructor(conclusions2, users) {
        this.conclusions2 = conclusions2;
        this.users = users;
        this.comments = [];
    }
    save(comment) {
        if (comment) {
            const newComment = new comment_sch_1.Comment(comment.publicId, comment.author, comment.text, comment.stamp, comment.re, comment.type);
            this.comments.push(newComment);
            return this.comments;
        }
        else {
            return this.conclusions2.flag(400, `Required Fields Missing...`);
        }
    }
    tether(userId, commentId) {
        const user = this.users.searchOne(userId);
        const comment = this.comments.find(comment => comment.publicId === commentId);
        user.comments.push();
    }
    searchOne(publicId) {
        return this.comments.find(comment => comment.publicId === publicId);
    }
    searchMany() { }
    searchAll() { }
    patchOne() { }
    patchMany() { }
    patchAll() { }
    wasteOne() { }
    wasteMany() { }
    wasteAll() { }
};
CommentsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [conclusions_service2_1.ConclusionsService2, users_service_1.UsersService])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map