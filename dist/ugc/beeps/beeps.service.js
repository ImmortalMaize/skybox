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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeepsService = void 0;
const common_1 = require("@nestjs/common");
const conclusions_service2_1 = require("../../corpses/conclusions.service2");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let BeepsService = class BeepsService {
    constructor(conclusions, model) {
        this.conclusions = conclusions;
        this.model = model;
        this.beeps = [];
    }
    save(title, creator, blurb, tags) {
        if (title && creator) {
            const publicId = this.beeps.length + 1;
            const beep = new this.model({
                publicId,
                title,
                creator,
                blurb,
                tags
            });
            beep.save();
            console.log(beep);
        }
        else {
            this.conclusions.flag(410, "No.");
        }
    }
    async searchOne(object) {
        const result = await this.model.findOne(object);
        return result;
    }
    async search(object) {
        const result = await this.model.find(object);
        return result;
    }
    patchOne(object, options, callback) {
        this.model.updateOne(object, options, callback);
    }
    patch(options, callback, object) {
        this.model.update(object, options, callback);
    }
    wasteOne(object) {
        this.model.deleteOne(object);
    }
    waste(object) {
        this.model.deleteMany(object);
    }
};
BeepsService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_1.InjectModel('Beep')),
    __metadata("design:paramtypes", [conclusions_service2_1.ConclusionsService2, typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], BeepsService);
exports.BeepsService = BeepsService;
//# sourceMappingURL=beeps.service.js.map