import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { YoutubesService } from './youtube.service';
import { YoutubesController } from './youtube.controller';
import { YoutubesEntity } from './entities/youtube.entity';

@Module({
  imports: [TypeOrmModule.forFeature([YoutubesEntity])],
  controllers: [YoutubesController],
  providers: [YoutubesService],
})
export class YoutubesModule {}
