import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SpotifysEntity } from './entities/spotify.entity';

@Injectable()
export class SpotifysService {
  constructor(
    @InjectRepository(SpotifysEntity)
    private spotifysRepository: Repository<SpotifysEntity>,
  ) {}

  async create(spotify: SpotifysEntity): Promise<SpotifysEntity> {
    const newSpotify = this.spotifysRepository.create(spotify);
    return await this.spotifysRepository.save(newSpotify);
  }

  async findAll(): Promise<SpotifysEntity[]> {
    return this.spotifysRepository.find();
  }

  // async findOne(id: number): Promise<SpotifysEntity> {
  //   return await this.spotifysRepository.findOne(id);
  // }

  async update(id: number, spotify: SpotifysEntity): Promise<number> {
    await this.spotifysRepository.update(id, spotify);
    return id;
  }

  async remove(id: number): Promise<number> {
    await this.spotifysRepository.delete(id);
    return id;
  }
}
