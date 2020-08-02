import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from './auth/auth.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private service: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post()
  async login(@Request() req) {
    return this.service.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async access(@Request() req) {
    return req.user
  }
}
