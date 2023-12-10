import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions } from 'typeorm';
import { ApplesEntity } from './entities/apple.entity';

@Injectable()
export class ApplesService {
  constructor(
    @InjectRepository(ApplesEntity)
    private appleRepository: Repository<ApplesEntity>,
  ) {}

  async findAll(filter?: { createdDate?: Date }): Promise<ApplesEntity[]> {
    const options: FindManyOptions<ApplesEntity> = {};

    if (filter && filter.createdDate) {
      options.where = { createdDate: filter.createdDate };
    }

    return this.appleRepository.find(options);
  }

  async create(apple: ApplesEntity): Promise<ApplesEntity> {
    const newApple = this.appleRepository.create(apple);
    return await this.appleRepository.save(newApple);
  }

  async update(id: number, apple: ApplesEntity): Promise<number> {
    await this.appleRepository.update(id, apple);
    return id;
  }

  async remove(id: number): Promise<number> {
    await this.appleRepository.delete(id);
    return id;
  }
}
