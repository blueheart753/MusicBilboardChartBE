import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MelonsService } from './vibe.service';
import { MelonsController } from './vibe.controller';
import { MelonsEntity } from './entities/vibe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MelonsEntity])],
  controllers: [MelonsController],
  providers: [MelonsService],
})
export class MelonsModule {}
