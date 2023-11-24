// melon.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SpotifysEntity } from './entities/spotify.entity';

@Injectable()
export class SpotifyService {
  constructor(
    @InjectRepository(SpotifysEntity)
    private readonly spotifysRepository: Repository<SpotifysEntity>,
  ) {}

  async getDataForToday() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to the beginning of the day

    const dataForToday = await this.spotifysRepository.find({
      where: {
        createdAt: today,
      },
    });

    return dataForToday;
  }
}
