import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ApplesService } from './apple.service';
import { ApplesController } from './apple.controller';
import { ApplesEntity } from './entities/apple.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ApplesEntity])],
  controllers: [ApplesController],
  providers: [ApplesService],
})
export class ApplesModule {}
