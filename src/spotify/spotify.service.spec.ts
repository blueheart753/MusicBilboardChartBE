import { Test, TestingModule } from '@nestjs/testing';
import { SpotifysService } from './spotify.service';

describe('MelonsService', () => {
  let service: SpotifysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpotifysService],
    }).compile();

    service = module.get<SpotifysService>(SpotifysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
