import { Test, TestingModule } from '@nestjs/testing';
import { ApplesService } from './apple.service';

describe('MelonsService', () => {
  let service: ApplesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplesService],
    }).compile();

    service = module.get<ApplesService>(ApplesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
