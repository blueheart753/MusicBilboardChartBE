import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { GiniesEntity } from './entities/ginie.entity';

@Injectable()
export class GiniessService {
  constructor(
    @InjectRepository(GiniesEntity)
    private ginieRepository: Repository<GiniesEntity>,
  ) {}

  async findAll(filter?: { createdDate?: Date }): Promise<GiniesEntity[]> {
    const options: FindManyOptions<GiniesEntity> = {};

    if (filter && filter.createdDate) {
      options.where = { createdDate: filter.createdDate };
    }

    return this.ginieRepository.find(options);
  }

  async create(apple: GiniesEntity): Promise<GiniesEntity> {
    const newApple = this.ginieRepository.create(apple);
    return await this.ginieRepository.save(newApple);
  }

  async update(id: number, apple: GiniesEntity): Promise<number> {
    await this.ginieRepository.update(id, apple);
    return id;
  }

  async remove(id: number): Promise<number> {
    await this.ginieRepository.delete(id);
    return id;
  }
}
