import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SpotifysService } from './spotify.service';
import { SpotifysController } from './spotify.controller';
import { SpotifysEntity } from './entities/spotify.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SpotifysEntity])],
  controllers: [SpotifysController],
  providers: [SpotifysService],
})
export class SpotifysModule {}
