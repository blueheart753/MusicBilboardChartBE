// melon.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { YoutubesEntity } from './entities/youtube.entity';

@Injectable()
export class YoutubeService {
  constructor(
    @InjectRepository(YoutubesEntity)
    private readonly youtubesRepository: Repository<YoutubesEntity>,
  ) {}

  async getDataForToday() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to the beginning of the day

    const dataForToday = await this.youtubesRepository.find({
      where: {
        createdAt: today,
      },
    });

    return dataForToday;
  }
}
