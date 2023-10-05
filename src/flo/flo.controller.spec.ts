import { Test, TestingModule } from '@nestjs/testing';
import { FlosController } from './flo.controller';
import { FlosService } from './flo.service';

describe('BooksController', () => {
  let controller: FlosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlosController],
      providers: [FlosService],
    }).compile();

    controller = module.get<FlosController>(FlosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
