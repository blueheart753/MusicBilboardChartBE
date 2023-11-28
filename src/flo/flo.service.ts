import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions } from 'typeorm';
import { FlosEntity } from './entities/flo.entity';

@Injectable()
export class FlosService {
  constructor(
    @InjectRepository(FlosEntity)
    private floRepository: Repository<FlosEntity>,
  ) {}

  async findAll(filter?: { createdDate?: Date }): Promise<FlosEntity[]> {
    const options: FindManyOptions<FlosEntity> = {};

    if (filter && filter.createdDate) {
      options.where = { createdDate: filter.createdDate };
    }

    return this.floRepository.find(options);
  }

  async create(apple: FlosEntity): Promise<FlosEntity> {
    const newApple = this.floRepository.create(apple);
    return await this.floRepository.save(newApple);
  }

  async update(id: number, apple: FlosEntity): Promise<number> {
    await this.floRepository.update(id, apple);
    return id;
  }

  async remove(id: number): Promise<number> {
    await this.floRepository.delete(id);
    return id;
  }
}
