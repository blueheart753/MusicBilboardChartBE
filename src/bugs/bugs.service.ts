import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BugssEntity } from './entities/bugs.entity';

@Injectable()
export class BugssService {
  constructor(
    @InjectRepository(BugssEntity)
    private bugssRepository: Repository<BugssEntity>,
  ) {}

  async create(bugs: BugssEntity): Promise<BugssEntity> {
    const newBugs = this.bugssRepository.create(bugs);
    return await this.bugssRepository.save(newBugs);
  }

  async findAll(): Promise<BugssEntity[]> {
    return this.bugssRepository.find();
  }

  // async findOne(id: number): Promise<BugssEntity> {
  //   return await this.bugssRepository.findOne(id);
  // }

  async update(id: number, bugs: BugssEntity): Promise<number> {
    await this.bugssRepository.update(id, bugs);
    return id;
  }

  async remove(id: number): Promise<number> {
    await this.bugssRepository.delete(id);
    return id;
  }
}
