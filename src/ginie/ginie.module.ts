import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GiniesService } from './ginie.service';
import { GiniesController } from './ginie.controller';
import { GiniesEntity } from './entities/ginie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GiniesEntity])],
  controllers: [GiniesController],
  providers: [GiniesService],
})
export class GiniesModule {}
