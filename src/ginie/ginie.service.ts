// melon.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GiniesEntity } from './entities/ginie.entity';

@Injectable()
export class GiniesService {
  constructor(
    @InjectRepository(GiniesEntity)
    private readonly giniesRepository: Repository<GiniesEntity>,
  ) {}

  async getDataForToday() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to the beginning of the day

    const dataForToday = await this.giniesRepository.find({
      where: {
        createdAt: today,
      },
    });

    return dataForToday;
  }
}
