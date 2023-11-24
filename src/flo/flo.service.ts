// melon.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FlosEntity } from './entities/flo.entity';

@Injectable()
export class FlosService {
  constructor(
    @InjectRepository(FlosEntity)
    private readonly flosRepository: Repository<FlosEntity>,
  ) {}

  async getDataForToday() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to the beginning of the day

    const dataForToday = await this.flosRepository.find({
      where: {
        createdAt: today,
      },
    });

    return dataForToday;
  }
}
