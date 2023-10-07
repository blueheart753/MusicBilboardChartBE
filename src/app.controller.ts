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

  @Get('/apple')
  getApple(): string {
    return this.appService.getApple();
  }

  @Get('/flo')
  getFlo(): string {
    return this.appService.getFlo();
  }

  @Get('/spotify')
  getSpotify(): string {
    return this.appService.getSpotify();
  }

  @Get('/ginie')
  getGinie(): string {
    return this.appService.getGinie();
  }

  @Get('/bugs')
  getBugs(): string {
    return this.appService.getBugs();
  }

  @Get('/youtube')
  getYoutube(): string {
    return this.appService.getYoutube();
  }

  @Get('/')
  getHome(): string {
    return this.appService.getHello();
  }
}
