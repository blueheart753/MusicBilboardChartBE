import { Test, TestingModule } from '@nestjs/testing';
import { YoutubesController } from './youtube.controller';
import { YoutubesService } from './youtube.service';

describe('BooksController', () => {
  let controller: YoutubesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YoutubesController],
      providers: [YoutubesService],
    }).compile();

    controller = module.get<YoutubesController>(YoutubesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
