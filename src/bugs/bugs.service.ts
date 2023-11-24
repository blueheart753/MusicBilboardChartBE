// melon.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BugssEntity } from './entities/bugs.entity';

@Injectable()
export class BugsService {
  constructor(
    @InjectRepository(BugssEntity)
    private readonly bugssRepository: Repository<BugssEntity>,
  ) {}

  async getDataForToday() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to the beginning of the day

    const dataForToday = await this.bugssRepository.find({
      where: {
        createdAt: today,
      },
    });

    return dataForToday;
  }
}
