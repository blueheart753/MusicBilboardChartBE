import { Test, TestingModule } from '@nestjs/testing';
import { VibesController } from './vibe.controller';
import { VibesService } from './vibe.service';

describe('BooksController', () => {
  let controller: VibesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VibesController],
      providers: [VibesService],
    }).compile();

    controller = module.get<VibesController>(VibesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
