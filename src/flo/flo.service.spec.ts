import { Test, TestingModule } from '@nestjs/testing';
import { FlosService } from './flo.service';

describe('FlosService', () => {
  let service: FlosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlosService],
    }).compile();

    service = module.get<FlosService>(FlosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
