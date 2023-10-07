import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { YoutubesEntity } from './entities/youtube.entity';

@Injectable()
export class YoutubesService {
  constructor(
    @InjectRepository(YoutubesEntity)
    private youtubesRepository: Repository<YoutubesEntity>,
  ) {}

  async create(youtube: YoutubesEntity): Promise<YoutubesEntity> {
    const newYoutube = this.youtubesRepository.create(youtube);
    return await this.youtubesRepository.save(newYoutube);
  }

  async findAll(): Promise<YoutubesEntity[]> {
    return this.youtubesRepository.find();
  }

  // async findOne(id: number): Promise<YoutubesEntity> {
  //   return await this.youtubesRepository.findOne(id);
  // }

  async update(id: number, youtube: YoutubesEntity): Promise<number> {
    await this.youtubesRepository.update(id, youtube);
    return id;
  }

  async remove(id: number): Promise<number> {
    await this.youtubesRepository.delete(id);
    return id;
  }
}
