// melon.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VibesEntity } from './entities/vibe.entity';

@Injectable()
export class VibeService {
  constructor(
    @InjectRepository(VibesEntity)
    private readonly vibesRepository: Repository<VibesEntity>,
  ) {}

  async getDataForToday() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to the beginning of the day

    const dataForToday = await this.vibesRepository.find({
      where: {
        createdAt: today,
      },
    });

    return dataForToday;
  }
}
