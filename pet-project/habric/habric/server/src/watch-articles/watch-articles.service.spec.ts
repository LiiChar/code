import { Test, TestingModule } from '@nestjs/testing';
import { WatchArticlesService } from './watch-articles.service';

describe('WatchArticlesService', () => {
  let service: WatchArticlesService;

  beforeEach(async () => {
    
    const module: TestingModule = await Test.createTestingModule({
      providers: [WatchArticlesService],
    }).compile();

    service = module.get<WatchArticlesService>(WatchArticlesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
