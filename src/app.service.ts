import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'hello';
  }

  getMelon(): string {
    return 'Hello melon';
  }

  getVibe(): string {
    return 'Hello vibe';
  }

  getHome(): string {
    return 'home';
  }
}
