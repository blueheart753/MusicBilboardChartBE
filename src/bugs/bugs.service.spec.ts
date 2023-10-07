import { Test, TestingModule } from '@nestjs/testing';
import { BugssService } from './bugs.service';

describe('BugssService', () => {
  let service: BugssService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BugssService],
    }).compile();

    service = module.get<BugssService>(BugssService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
