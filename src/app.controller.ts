import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  home(): string {
    return this.appService.getHome();
  }

  @Get('/vibe')
  getVibe(): string {
    return this.appService.getVibe();
  }

  @Get('/melon')
  getMelon(): string {
    return this.appService.getMelon();
  }

  @Get('/')
  getHome(): string {
    return this.appService.getHello();
  }
}
