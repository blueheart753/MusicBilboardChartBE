import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VibesService } from './vibe.service';
import { VibesController } from './vibe.controller';
import { VibesEntity } from './entities/vibe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VibesEntity])],
  controllers: [VibesController],
  providers: [VibesService],
})
export class VibesModule {}
