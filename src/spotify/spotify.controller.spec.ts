import { Test, TestingModule } from '@nestjs/testing';
import { SpotifysController } from './spotify.controller';
import { SpotifyssService } from './spotify.service';

describe('BooksController', () => {
  let controller: SpotifysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpotifysController],
      providers: [SpotifyssService],
    }).compile();

    controller = module.get<SpotifysController>(SpotifysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
