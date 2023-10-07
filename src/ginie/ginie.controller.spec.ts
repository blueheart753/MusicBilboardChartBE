import { Test, TestingModule } from '@nestjs/testing';
import { GiniesController } from './ginie.controller';
import { GiniesService } from './ginie.service';

describe('BooksController', () => {
  let controller: GiniesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GiniesController],
      providers: [GiniesService],
    }).compile();

    controller = module.get<GiniesController>(GiniesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
