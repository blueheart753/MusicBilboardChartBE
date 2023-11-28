import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { YoutubesEntity } from './entities/youtube.entity';

@Injectable()
export class YoutubessService {
  constructor(
    @InjectRepository(YoutubesEntity)
    private youtubeRepository: Repository<YoutubesEntity>,
  ) {}

  async findAll(filter?: { createdDate?: Date }): Promise<YoutubesEntity[]> {
    const options: FindManyOptions<YoutubesEntity> = {};

    if (filter && filter.createdDate) {
      options.where = { createdDate: filter.createdDate };
    }

    return this.youtubeRepository.find(options);
  }

  async create(youtube: YoutubesEntity): Promise<YoutubesEntity> {
    const newYoutube = this.youtubeRepository.create(youtube);
    return await this.youtubeRepository.save(newYoutube);
  }

  async update(id: number, apple: YoutubesEntity): Promise<number> {
    await this.youtubeRepository.update(id, apple);
    return id;
  }

  async remove(id: number): Promise<number> {
    await this.youtubeRepository.delete(id);
    return id;
  }
}
