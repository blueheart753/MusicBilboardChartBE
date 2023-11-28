import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions } from 'typeorm';
import { BugssEntity } from './entities/bugs.entity';

@Injectable()
export class BugsService {
  constructor(
    @InjectRepository(BugssEntity)
    private bugsRepository: Repository<BugssEntity>,
  ) {}

  async findAll(filter?: { createdDate?: Date }): Promise<BugssEntity[]> {
    const options: FindManyOptions<BugssEntity> = {};

    if (filter && filter.createdDate) {
      options.where = { createdDate: filter.createdDate };
    }

    return this.bugsRepository.find(options);
  }

  async create(apple: BugssEntity): Promise<BugssEntity> {
    const newApple = this.bugsRepository.create(apple);
    return await this.bugsRepository.save(newApple);
  }

  async update(id: number, apple: BugssEntity): Promise<number> {
    await this.bugsRepository.update(id, apple);
    return id;
  }

  async remove(id: number): Promise<number> {
    await this.bugsRepository.delete(id);
    return id;
  }
}
