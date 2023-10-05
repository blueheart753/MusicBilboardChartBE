import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { BookEntity } from './books/entities/book.entity';
import { MelonsEntity } from './melon/entities/melon.entity';
import { MelonsModule } from './melon/melon.module';
import { VibesEntity } from './vibe/entities/vibe.entity';
import { VibesModule } from './vibe/vibe.module';
import { ApplesEntity } from './appleMusic/entities/apple.entity';
import { ApplesModule } from './appleMusic/apple.module';
import { FlosEntity } from './flo/entities/flo.entity';
import { FlosModule } from './flo/flo.module';

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
        BookEntity,
        MelonsEntity,
        VibesEntity,
        ApplesEntity,
        FlosEntity,
      ],
      synchronize: true,
    }),
    BooksModule,
    MelonsModule,
    VibesModule,
    ApplesModule,
    FlosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
