import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { SpotifysEntity } from './entities/spotify.entity';

@Injectable()
export class SpotifyssService {
  constructor(
    @InjectRepository(SpotifysEntity)
    private ginieRepository: Repository<SpotifysEntity>,
  ) {}

  async findAll(filter?: { createdDate?: Date }): Promise<SpotifysEntity[]> {
    const options: FindManyOptions<SpotifysEntity> = {};

    if (filter && filter.createdDate) {
      options.where = { createdDate: filter.createdDate };
    }

    return this.ginieRepository.find(options);
  }

  async create(apple: SpotifysEntity): Promise<SpotifysEntity> {
    const newApple = this.ginieRepository.create(apple);
    return await this.ginieRepository.save(newApple);
  }

  async update(id: number, apple: SpotifysEntity): Promise<number> {
    await this.ginieRepository.update(id, apple);
    return id;
  }

  async remove(id: number): Promise<number> {
    await this.ginieRepository.delete(id);
    return id;
  }
}
