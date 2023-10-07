import { Test, TestingModule } from '@nestjs/testing';
import { GiniesService } from './ginie.service';

describe('MelonsService', () => {
  let service: GiniesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GiniesService],
    }).compile();

    service = module.get<GiniesService>(GiniesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
