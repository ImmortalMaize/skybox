import { createParamDecorator, ExecutionContext, applyDecorators, SetMetadata } from '@nestjs/common';

export const Permissions = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return applyDecorators(
      SetMetadata('permissions', data),
    )
    }
);