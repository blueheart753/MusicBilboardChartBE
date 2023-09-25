import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { BookEntity } from './books/entities/book.entity';
import { MelonsEntity } from './melon/entities/melon.entity';
import { MelonsModule } from './melon/melon.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'testDB',
      entities: [BookEntity, MelonsEntity],
      synchronize: true,
    }),
    BooksModule,
    MelonsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}