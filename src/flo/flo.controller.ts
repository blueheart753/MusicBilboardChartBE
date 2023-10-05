import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FlosService } from './flo.service';
import { FlosEntity } from './entities/flo.entity';

@Controller('flo')
export class FlosController {
  constructor(private flosService: FlosService) {}

  @Post()
  async create(@Body() flo: FlosEntity): Promise<FlosEntity> {
    return await this.flosService.create(flo);
  }

  @Get()
  async findAll(): Promise<FlosEntity[]> {
    return this.flosService.findAll();
  }

  // @Get(':id')
  // async findOne(@Param('id') id: string): Promise<FlossEntity> {
  //   return this.flosService.findOne(+id);
  // }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() flo: FlosEntity,
  ): Promise<number> {
    return this.flosService.update(+id, flo);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<number> {
    return this.flosService.remove(+id);
  }
}
