import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApplesService } from './apple.service';
import { ApplesEntity } from './entities/apple.entity';

@Controller('apple')
export class ApplesController {
  constructor(private applesService: ApplesService) {}

  @Post()
  async create(@Body() apple: ApplesEntity): Promise<ApplesEntity> {
    return await this.applesService.create(apple);
  }

  @Get()
  async findAll(): Promise<ApplesEntity[]> {
    return this.applesService.findAll();
  }

  @Get('/today')
  async findToday(): Promise<ApplesEntity[]> {
    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    return this.applesService.findAll({ createdDate: today });
  }

  // @Get(':id')
  // async findOne(@Param('id') id: string): Promise<VibesEntity> {
  //   return this.vibesService.findOne(+id);
  // }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() apple: ApplesEntity,
  ): Promise<number> {
    return this.applesService.update(+id, apple);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<number> {
    return this.applesService.remove(+id);
  }
}
