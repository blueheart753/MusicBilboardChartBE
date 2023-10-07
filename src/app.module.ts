import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MelonsEntity } from './melon/entities/melon.entity';
import { MelonsModule } from './melon/melon.module';
import { VibesEntity } from './vibe/entities/vibe.entity';
import { VibesModule } from './vibe/vibe.module';
import { ApplesEntity } from './appleMusic/entities/apple.entity';
import { ApplesModule } from './appleMusic/apple.module';
import { FlosEntity } from './flo/entities/flo.entity';
import { FlosModule } from './flo/flo.module';
import { SpotifysEntity } from './spotify/entities/spotify.entity';
import { SpotifysModule } from './spotify/spotify.module';
import { GiniesEntity } from './ginie/entities/ginie.entity';
import { GiniesModule } from './ginie/ginie.module';
import { BugssEntity } from './bugs/entities/bugs.entity';
import { BugssModule } from './bugs/bugs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'testDB',
      entities: [
        MelonsEntity,
        VibesEntity,
        ApplesEntity,
        FlosEntity,
        SpotifysEntity,
        GiniesEntity,
        BugssEntity,
      ],
      synchronize: true,
    }),
    MelonsModule,
    VibesModule,
    ApplesModule,
    FlosModule,
    SpotifysModule,
    GiniesModule,
    BugssModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
