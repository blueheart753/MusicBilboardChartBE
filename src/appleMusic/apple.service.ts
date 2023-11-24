// melon.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplesEntity } from './entities/apple.entity';

@Injectable()
export class ApplesService {
  constructor(
    @InjectRepository(ApplesEntity)
    private readonly applesRepository: Repository<ApplesEntity>,
  ) {}

  async getDataForToday() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to the beginning of the day

    const dataForToday = await this.applesRepository.find({
      where: {
        createdAt: today,
      },
    });

    return dataForToday;
  }
}
