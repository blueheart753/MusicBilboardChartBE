import { Test, TestingModule } from '@nestjs/testing';
import { BugssController } from './bugs.controller';
import { BugssService } from './bugs.service';

describe('bugssController', () => {
  let controller: BugssController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BugssController],
      providers: [BugssService],
    }).compile();

    controller = module.get<BugssController>(BugssController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
