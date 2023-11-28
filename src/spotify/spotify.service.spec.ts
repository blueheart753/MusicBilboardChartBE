import { Test, TestingModule } from '@nestjs/testing';
import { SpotifyssService } from './spotify.service';

describe('MelonsService', () => {
  let service: SpotifyssService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpotifyssService],
    }).compile();

    service = module.get<SpotifyssService>(SpotifyssService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
