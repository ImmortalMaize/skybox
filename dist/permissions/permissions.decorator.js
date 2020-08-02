"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permissions = void 0;
const common_1 = require("@nestjs/common");
exports.Permissions = common_1.createParamDecorator((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return common_1.applyDecorators(common_1.SetMetadata('permissions', data));
});
//# sourceMappingURL=permissions.decorator.js.map