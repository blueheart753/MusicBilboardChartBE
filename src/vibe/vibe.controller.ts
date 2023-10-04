import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { VibesService } from './vibe.service';
import { VibesEntity } from './entities/vibe.entity';

@Controller('melon')
export class VibesController {
  constructor(private vibesService: VibesService) {}

  @Post()
  async create(@Body() vibe: VibesEntity): Promise<VibesEntity> {
    return await this.vibesService.create(vibe);
  }

  @Get()
  async findAll(): Promise<VibesEntity[]> {
    return this.vibesService.findAll();
  }

  // @Get(':id')
  // async findOne(@Param('id') id: string): Promise<VibesEntity> {
  //   return this.vibesService.findOne(+id);
  // }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() vibe: VibesEntity,
  ): Promise<number> {
    return this.vibesService.update(+id, vibe);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<number> {
    return this.vibesService.remove(+id);
  }
}
