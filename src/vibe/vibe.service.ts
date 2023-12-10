import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { VibesEntity } from './entities/vibe.entity';

@Injectable()
export class VibesService {
  constructor(
    @InjectRepository(VibesEntity)
    private vibeRepository: Repository<VibesEntity>,
  ) {}

  async findAll(filter?: { createdDate?: Date }): Promise<VibesEntity[]> {
    const options: FindManyOptions<VibesEntity> = {};

    if (filter && filter.createdDate) {
      options.where = { createdDate: filter.createdDate };
    }

    return this.vibeRepository.find(options);
  }

  async create(apple: VibesEntity): Promise<VibesEntity> {
    const newApple = this.vibeRepository.create(apple);
    return await this.vibeRepository.save(newApple);
  }

  async update(id: number, apple: VibesEntity): Promise<number> {
    await this.vibeRepository.update(id, apple);
    return id;
  }

  async remove(id: number): Promise<number> {
    await this.vibeRepository.delete(id);
    return id;
  }
}
