import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BugssService } from './bugs.service';
import { BugssController } from './bugs.controller';
import { BugssEntity } from './entities/bugs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BugssEntity])],
  controllers: [BugssController],
  providers: [BugssService],
})
export class BugssModule {}
