import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VibesEntity } from './entities/vibe.entity';

@Injectable()
export class VibesService {
  constructor(
    @InjectRepository(VibesEntity)
    private vibesRepository: Repository<VibesEntity>,
  ) {}

  async create(vibe: VibesEntity): Promise<VibesEntity> {
    const newVibe = this.vibesRepository.create(vibe);
    return await this.vibesRepository.save(newVibe);
  }

  async findAll(): Promise<VibesEntity[]> {
    return this.vibesRepository.find();
  }

  // async findOne(id: number): Promise<MelonsEntity> {
  //   return await this.melonsRepository.findOne(id);
  // }

  async update(id: number, vibe: VibesEntity): Promise<number> {
    await this.vibesRepository.update(id, vibe);
    return id;
  }

  async remove(id: number): Promise<number> {
    await this.vibesRepository.delete(id);
    return id;
  }
}
