import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FlosEntity } from './entities/flo.entity';

@Injectable()
export class FlosService {
  constructor(
    @InjectRepository(FlosEntity)
    private flosRepository: Repository<FlosEntity>,
  ) {}

  async create(apple: FlosEntity): Promise<FlosEntity> {
    const newApple = this.flosRepository.create(apple);
    return await this.flosRepository.save(newApple);
  }

  async findAll(): Promise<FlosEntity[]> {
    return this.flosRepository.find();
  }

  // async findOne(id: number): Promise<MelonsEntity> {
  //   return await this.melonsRepository.findOne(id);
  // }

  async update(id: number, apple: FlosEntity): Promise<number> {
    await this.flosRepository.update(id, apple);
    return id;
  }

  async remove(id: number): Promise<number> {
    await this.flosRepository.delete(id);
    return id;
  }
}
