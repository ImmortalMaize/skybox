"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conclusion = void 0;
const common_1 = require("@nestjs/common");
class Conclusion extends common_1.HttpException {
    constructor(bro, text) {
        super("e", 403);
        this.bro = bro;
        this.text = text;
    }
}
exports.Conclusion = Conclusion;
//# sourceMappingURL=conclusions.sch.js.map