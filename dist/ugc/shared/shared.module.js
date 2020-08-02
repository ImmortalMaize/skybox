"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("../users/users.module");
const encode_text_pipe_1 = require("./pipes/encode.text.pipe");
const password_10_pipe_1 = require("./pipes/password.10.pipe");
const unique_email_pipe_1 = require("./pipes/unique.email.pipe");
const hash_pipe_1 = require("./pipes/hash.pipe");
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    common_1.Module({
        imports: [users_module_1.UsersModule],
        providers: [encode_text_pipe_1.EncodeTextPipe, hash_pipe_1.HashPipe, password_10_pipe_1.Password10Pipe, unique_email_pipe_1.UniqueEmailPipe]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map