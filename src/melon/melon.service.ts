import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions } from 'typeorm';
import { MelonsEntity } from './entities/melon.entity';

@Injectable()
export class MelonsService {
  constructor(
    @InjectRepository(MelonsEntity)
    private melonRepository: Repository<MelonsEntity>,
  ) {}

  async findAll(filter?: { createdDate?: Date }): Promise<MelonsEntity[]> {
    const options: FindManyOptions<MelonsEntity> = {};

    if (filter && filter.createdDate) {
      options.where = { createdDate: filter.createdDate };
    }

    return this.melonRepository.find(options);
  }

  async create(melon: MelonsEntity): Promise<MelonsEntity> {
    const newMelon = this.melonRepository.create(melon);
    return await this.melonRepository.save(newMelon);
  }

  async update(id: number, melon: MelonsEntity): Promise<number> {
    await this.melonRepository.update(id, melon);
    return id;
  }

  async remove(id: number): Promise<number> {
    await this.melonRepository.delete(id);
    return id;
  }
}
