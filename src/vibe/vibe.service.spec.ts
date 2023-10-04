import { Test, TestingModule } from '@nestjs/testing';
import { MelonsService } from './vibe.service';

describe('MelonsService', () => {
  let service: MelonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MelonsService],
    }).compile();

    service = module.get<MelonsService>(MelonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
