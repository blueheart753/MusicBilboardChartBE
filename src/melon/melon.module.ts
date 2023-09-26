import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MelonsService } from './melon.service';
import { MelonsController } from './melon.controller';
import { MelonsEntity } from './entities/melon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MelonsEntity])],
  controllers: [MelonsController],
  providers: [MelonsService],
})
export class MelonsModule {}
