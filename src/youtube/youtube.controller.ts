import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { YoutubesService } from './youtube.service';
import { YoutubesEntity } from './entities/youtube.entity';

@Controller('youtube')
export class YoutubesController {
  constructor(private youtubesService: YoutubesService) {}

  @Post()
  async create(@Body() youtube: YoutubesEntity): Promise<YoutubesEntity> {
    return await this.youtubesService.create(youtube);
  }

  @Get()
  async findAll(): Promise<YoutubesEntity[]> {
    return this.youtubesService.findAll();
  }

  // @Get(':id')
  // async findOne(@Param('id') id: string): Promise<YoutubesEntity> {
  //   return this.youtubesService.findOne(+id);
  // }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() youtube: YoutubesEntity,
  ): Promise<number> {
    return this.youtubesService.update(+id, youtube);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<number> {
    return this.youtubesService.remove(+id);
  }
}
