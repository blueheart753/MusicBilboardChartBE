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

  getApple(): string {
    return 'Hello AppleMusic';
  }

  getFlo(): string {
    return 'Hello Flo';
  }

  getSpotify(): string {
    return 'Hello Spotify';
  }

  getGinie(): string {
    return 'Hello Ginie';
  }

  getHome(): string {
    return 'Hello Home';
  }
}
