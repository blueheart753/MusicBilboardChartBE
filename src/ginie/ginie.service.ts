import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GiniesEntity } from './entities/ginie.entity';

@Injectable()
export class GiniesService {
  constructor(
    @InjectRepository(GiniesEntity)
    private giniesRepository: Repository<GiniesEntity>,
  ) {}

  async create(ginie: GiniesEntity): Promise<GiniesEntity> {
    const newGinie = this.giniesRepository.create(ginie);
    return await this.giniesRepository.save(newGinie);
  }

  async findAll(): Promise<GiniesEntity[]> {
    return this.giniesRepository.find();
  }

  // async findOne(id: number): Promise<GiniesEntity> {
  //   return await this.melonsRepository.findOne(id);
  // }

  async update(id: number, ginie: GiniesEntity): Promise<number> {
    await this.giniesRepository.update(id, ginie);
    return id;
  }

  async remove(id: number): Promise<number> {
    await this.giniesRepository.delete(id);
    return id;
  }
}
