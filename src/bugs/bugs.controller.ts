import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BugssService } from './bugs.service';
import { BugssEntity } from './entities/bugs.entity';

@Controller('bugs')
export class BugssController {
  constructor(private bugssService: BugssService) {}

  @Post()
  async create(@Body() bugs: BugssEntity): Promise<BugssEntity> {
    return await this.bugssService.create(bugs);
  }

  @Get()
  async findAll(): Promise<BugssEntity[]> {
    return this.bugssService.findAll();
  }

  @Get('/today')
  async findToday(): Promise<BugssEntity[]> {
    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    return this.bugssService.findAll({ createdDate: today });
  }

  // @Get(':id')
  // async findOne(@Param('id') id: string): Promise<BugssEntity> {
  //   return this.bugssService.findOne(+id);
  // }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() bugs: BugssEntity,
  ): Promise<number> {
    return this.bugssService.update(+id, bugs);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<number> {
    return this.bugssService.remove(+id);
  }
}
