import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SpotifysService } from './spotify.service';
import { SpotifysEntity } from './entities/spotify.entity';

@Controller('spotify')
export class SpotifysController {
  constructor(private spotifysService: SpotifysService) {}

  @Post()
  async create(@Body() spotify: SpotifysEntity): Promise<SpotifysEntity> {
    return await this.spotifysService.create(spotify);
  }

  @Get()
  async findAll(): Promise<SpotifysEntity[]> {
    return this.spotifysService.findAll();
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
    return this.spotifysService.update(+id, spotify);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<number> {
    return this.spotifysService.remove(+id);
  }
}
