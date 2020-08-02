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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const conclusions_service2_1 = require("../corpses/conclusions.service2");
const comment_sch_1 = require("../comments/comment.sch");
let UsersService = class UsersService {
    constructor(conclusions) {
        this.conclusions = conclusions;
        this.users = [];
    }
    insertUser(alias, email, password, bio) {
        if (typeof (alias) === "string") {
            let id = this.users.length + 1;
            let user = { publicId: id, alias: alias, email: email, password: password, bio: bio, comments: [] };
            this.users.push(user);
            console.log(this.users);
            return user;
        }
        else {
            return this.conclusions.flag(404, 'Nope.');
        }
    }
    async findUserEmail(email) {
        let user = this.users.find(user => user.email === email);
        return user;
    }
    searchAll() {
        return this.users;
    }
    searchOne(id) {
        this.users.find(user => user.publicId === id);
    }
    deleteUser(id) {
        let foundUser = this.users.findIndex(u => u.publicId = id);
        this.users.splice(foundUser);
        return this.users;
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [conclusions_service2_1.ConclusionsService2])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map