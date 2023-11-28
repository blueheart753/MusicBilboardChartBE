import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MelonsService } from './melon.service';
import { MelonsEntity } from './entities/melon.entity';

@Controller('melon')
export class MelonsController {
  constructor(private melonsService: MelonsService) {}

  @Post()
  async create(@Body() melon: MelonsEntity): Promise<MelonsEntity> {
    return await this.melonsService.create(melon);
  }

  @Get('today')
  async getYesterdayData(): Promise<MelonsEntity[]> {
    const today: Date = new Date();
    return this.melonsService.findAll({ createdDate: today });
  }

  @Get()
  async findAll(): Promise<MelonsEntity[]> {
    return this.melonsService.findAll();
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() melon: MelonsEntity,
  ): Promise<number> {
    return this.melonsService.update(+id, melon);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<number> {
    return this.melonsService.remove(+id);
  }
}
