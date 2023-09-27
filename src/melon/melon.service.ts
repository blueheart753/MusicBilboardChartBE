import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MelonsEntity } from './entities/melon.entity';

@Injectable()
export class MelonsService {
  constructor(
    @InjectRepository(MelonsEntity)
    private melonsRepository: Repository<MelonsEntity>,
  ) {}

  async create(melon: MelonsEntity): Promise<MelonsEntity> {
    const newMelon = this.melonsRepository.create(melon);
    return await this.melonsRepository.save(newMelon);
  }

  async findAll(): Promise<MelonsEntity[]> {
    return this.melonsRepository.find();
  }

  // async findOne(id: number): Promise<MelonsEntity> {
  //   return await this.melonsRepository.findOne(id);
  // }

  async update(id: number, melon: MelonsEntity): Promise<number> {
    await this.melonsRepository.update(id, melon);
    return id;
  }

  async remove(id: number): Promise<number> {
    await this.melonsRepository.delete(id);
    return id;
  }
}
