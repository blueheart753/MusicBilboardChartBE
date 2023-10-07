import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FlosService } from './flo.service';
import { FlosController } from './flo.controller';
import { FlosEntity } from './entities/flo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FlosEntity])],
  controllers: [FlosController],
  providers: [FlosService],
})
export class FlosModule {}
