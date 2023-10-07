import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { GiniesService } from './ginie.service';
import { GiniesEntity } from './entities/ginie.entity';

@Controller('ginie')
export class GiniesController {
  constructor(private giniesService: GiniesService) {}

  @Post()
  async create(@Body() ginie: GiniesEntity): Promise<GiniesEntity> {
    return await this.giniesService.create(ginie);
  }

  @Get()
  async findAll(): Promise<GiniesEntity[]> {
    return this.giniesService.findAll();
  }

  // @Get(':id')
  // async findOne(@Param('id') id: string): Promise<GiniesEntity> {
  //   return this.giniesService.findOne(+id);
  // }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() ginie: GiniesEntity,
  ): Promise<number> {
    return this.giniesService.update(+id, ginie);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<number> {
    return this.giniesService.remove(+id);
  }
}
