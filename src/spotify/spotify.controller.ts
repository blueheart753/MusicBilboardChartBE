import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SpotifyssService } from './spotify.service';
import { SpotifysEntity } from './entities/spotify.entity';

@Controller('spotify')
export class SpotifysController {
  constructor(private spotifyssService: SpotifyssService) {}

  @Post()
  async create(@Body() spotify: SpotifysEntity): Promise<SpotifysEntity> {
    return await this.spotifyssService.create(spotify);
  }

  @Get()
  async findAll(): Promise<SpotifysEntity[]> {
    return this.spotifyssService.findAll();
  }

  // @Get(':id')
  // async findOne(@Param('id') id: string): Promise<SpotifysEntity> {
  //   return this.spotifysService.findOne(+id);
  // }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() spotify: SpotifysEntity,
  ): Promise<number> {
    return this.spotifyssService.update(+id, spotify);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<number> {
    return this.spotifyssService.remove(+id);
  }
}
