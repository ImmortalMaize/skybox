"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const shared_module_1 = require("./ugc/shared/shared.module");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./ugc/users/users.module");
const beeps_module_1 = require("./ugc/beeps/beeps.module");
const auth_module_1 = require("./auth/auth.module");
const comments_module_1 = require("./ugc/comments/comments.module");
const mongoose_1 = require("@nestjs/mongoose");
require('dotenv').config();
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            shared_module_1.SharedModule, users_module_1.UsersModule, beeps_module_1.BeepsModule, auth_module_1.AuthModule, comments_module_1.CommentsModule, mongoose_1.MongooseModule.forRoot(`mongodb+srv://xac:${process.env.key}@cluster0-lhm9m.gcp.mongodb.net/mongobox2?retryWrites=true&w=majority`)
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map