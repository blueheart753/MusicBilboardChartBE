import { Test, TestingModule } from '@nestjs/testing';
import { MelonsController } from './vibe.controller';
import { MelonsService } from './vibe.service';

describe('BooksController', () => {
  let controller: MelonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MelonsController],
      providers: [MelonsService],
    }).compile();

    controller = module.get<MelonsController>(MelonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
