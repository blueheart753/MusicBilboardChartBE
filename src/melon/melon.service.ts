// melon.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MelonsEntity } from './entities/melon.entity';

@Injectable()
export class MelonsService {
  constructor(
    @InjectRepository(MelonsEntity)
    private readonly melonsRepository: Repository<MelonsEntity>,
  ) {}

  async getDataForToday() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to the beginning of the day

    const dataForToday = await this.melonsRepository.find({
      where: {
        createdAt: today,
      },
    });

    return dataForToday;
  }
}
