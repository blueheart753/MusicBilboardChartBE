import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplesEntity } from './entities/apple.entity';

@Injectable()
export class ApplesService {
  constructor(
    @InjectRepository(ApplesEntity)
    private applesRepository: Repository<ApplesEntity>,
  ) {}

  async create(apple: ApplesEntity): Promise<ApplesEntity> {
    const newApple = this.applesRepository.create(apple);
    return await this.applesRepository.save(newApple);
  }

  async findAll(): Promise<ApplesEntity[]> {
    return this.applesRepository.find();
  }

  // async findOne(id: number): Promise<MelonsEntity> {
  //   return await this.melonsRepository.findOne(id);
  // }

  async update(id: number, apple: ApplesEntity): Promise<number> {
    await this.applesRepository.update(id, apple);
    return id;
  }

  async remove(id: number): Promise<number> {
    await this.applesRepository.delete(id);
    return id;
  }
}
