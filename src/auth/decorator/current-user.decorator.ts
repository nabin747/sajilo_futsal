import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    console.log("🚀 ~ file: current-user.decorator.ts:7 ~ user:", user)
    return data ? user?.[data] : user;
  },
);
