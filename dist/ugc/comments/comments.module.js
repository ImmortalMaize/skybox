"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsModule = void 0;
const common_1 = require("@nestjs/common");
const corpses_module_1 = require("../../corpses/corpses.module");
const beeps_module_1 = require("../beeps/beeps.module");
const comments_service_1 = require("./comments.service");
const comments_controller_1 = require("./comments.controller");
const users_module_1 = require("../users/users.module");
const mongoose_1 = require("@nestjs/mongoose");
const comment_sch_1 = require("./schemas/comment.sch");
let CommentsModule = class CommentsModule {
};
CommentsModule = __decorate([
    common_1.Module({
        imports: [corpses_module_1.CorpsesModule, beeps_module_1.BeepsModule, users_module_1.UsersModule, mongoose_1.MongooseModule.forFeature([
                {
                    name: 'Comment',
                    schema: comment_sch_1.commentBox
                }
            ])],
        providers: [comments_service_1.CommentsService],
        controllers: [comments_controller_1.CommentsController]
    })
], CommentsModule);
exports.CommentsModule = CommentsModule;
//# sourceMappingURL=comments.module.js.map