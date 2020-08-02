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
exports.ConclusionsService = void 0;
const common_1 = require("@nestjs/common");
const corpses_service_1 = require("./corpses.service");
const conclusions_sch_1 = require("./conclusions.sch");
let ConclusionsService = class ConclusionsService {
    constructor(corpses) {
        this.corpses = corpses;
    }
    conclude(result, request, response) {
        this.corpses.kill(request.method, "User", request.url, request.referrer, (Object.keys(result).includes('status') !== true ? 201 : result.status));
        if (Object.keys(result).includes('status')) {
            const status = result.status;
            const code = (status === 400 ? common_1.HttpStatus.BAD_REQUEST :
                status === 401 ? common_1.HttpStatus.UNAUTHORIZED :
                    status === 402 ? common_1.HttpStatus.PAYMENT_REQUIRED :
                        status === 403 ? common_1.HttpStatus.FORBIDDEN :
                            status === 404 ? common_1.HttpStatus.NOT_FOUND :
                                common_1.HttpStatus.OK);
            response.status(code).json(result);
        }
        else {
            response.status(201).json(result);
        }
    }
    preclude(result, callback) {
        if (Object.keys(result).includes('status')) {
            return result;
        }
        else {
            return callback(result);
        }
    }
    flag(status, text) {
        return new conclusions_sch_1.Conclusion(status, text);
    }
};
ConclusionsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [corpses_service_1.CorpsesService])
], ConclusionsService);
exports.ConclusionsService = ConclusionsService;
//# sourceMappingURL=conclusions.service.js.map